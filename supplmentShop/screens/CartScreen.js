import React, { useState } from 'react';
import { Text, View, FlatList, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import  { cart, COUPONS } from "../data/dummy-data";
import styles from '../assets/styles';


export default function CartScreen({ route, navigation }) {

  let myCart = cart;
  let res = cart.reduce(function (prev, current) {
    return prev + +current.price
  }, 0);
  let price = res.toFixed(2);

  const [Coupon, SetCoupon] = useState("");
  const [ReductionSucceeded, SetReductionSucceeded] = useState()
  const [PriceAfterDiscount, SetPriceAfterDiscount] = useState(price);


  const checkCoupon = () => {
    const coupon = COUPONS.find(item => item.coupon === Coupon);
    if (coupon != undefined) {
      let res = price - (price *coupon.discount)
      SetPriceAfterDiscount(res.toFixed(2));
      SetReductionSucceeded(true);
    }
    else {
      SetReductionSucceeded(false);
    }
  }


  const renderItem = ({ item }) => {
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity onLongPress={() => {
        }} onPress={() => navigation.navigate("About Product", { productId: item.id })}>
          <ImageBackground source={{ uri: item.imageUrl }} style={styles.BGImg}></ImageBackground>
        </TouchableOpacity>
        <View style={[styles.container]}>
        <Text style={[styles.titles, { fontSize: 15 }]}>{item.title}</Text>
        <Text style={[styles.title2, { fontSize: 20 }]}>{item.price}$</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.backGround}>
      <View style={{ height: "60%" }}>
        <Text style={[styles.titles, { fontSize: 40 }]}>the purched items</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myCart}
          renderItem={renderItem}
          numColumns={3}
          onSelectProduct
        />
      </View>
      <View style={[styles.container]}>
        <Text style={styles.titles}>price before coupon : 
        <Text  style={styles.title2}>{price}$</Text>
        </Text>
        <View style={[styles.inputView, { alignItems: 'center' }]}>
          <Text style={styles.titles}>Coupon </Text>
          <TextInput
            autoCapitalize='none'
            onChangeText={(text) => SetCoupon(text)}
            style={[styles.input, { marginBottom: 5 },
              ReductionSucceeded ? "" : styles.inputError
            ]}
          />
          <Text style={styles.NoDiscount}>
            {ReductionSucceeded ? "" : "There is no discount"}
          </Text>
          <View style={{ alignItems: 'center', textAlign: "center" }}>
            <TouchableOpacity
              style={styles.button_color}
              onPress={() => {
                checkCoupon()
              }}>
              <Text style={[styles.button_text_color, {fontSize: 16, width: 150, height: 40, marginTop: 2}]}> to Check </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titles}>Price after coupon : 
        <Text  style={styles.title2}>{PriceAfterDiscount}$</Text>
        </Text>
        <View style={{ alignItems: 'center', textAlign: "center" }}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => {
              navigation.navigate("Payment")
            }}>
            <Text style={[styles.button_text_color, {fontSize: 18, width: 150, height: 40, marginTop: 2}]}> pay </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}
