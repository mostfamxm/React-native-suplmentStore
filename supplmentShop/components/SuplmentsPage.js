import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Modal } from "react-native";
import styles from '../assets/styles'
import { cart } from "../data/dummy-data"

const ItemsGrid = (props, { navigation }) => {

  const [Presenter, SetPresenter] = useState(true);
  const [ShowMessage, SetShowMessage] = useState(false);
  const onPressHandler = () => {
    SetPresenter(!Presenter);
    SetShowMessage(true);
    setTimeout(() => {
      SetShowMessage(false);
    }, 850);
  };

  return (
    <TouchableOpacity style={styles.ElementProduct} onPress={props.onSelectProduct}>
      <View style={[styles.SquareAppearance, { backgroundColor: 'white' }]}>
        <Modal
          visible={ShowMessage}
          transparent
        >
          <View style={styles.display_message}>
            <View style={styles.text_modal}>
              <Text style={styles.text_message}></Text>
            </View>
          </View>
        </Modal>
        <View style={styles.productRow}>
          
          <ImageBackground source={{ uri: props.Image }} style={styles.Image}>
            <View style={styles.about_product_images}>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.Text_color_and_price}>{props.title}</Text>
          <Text style={styles.Text_color_and_price}>{props.price} $</Text>
          <TouchableOpacity
            onPress={() => {
              cart.push(props.fullItem)
              onPressHandler()
            }}
            style={styles.button_color}>
            <Text style={styles.button_text_color}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
    
  );
};



export default ItemsGrid;