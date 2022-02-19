import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../assets/styles'
import { AntDesign as Icon } from "react-native-vector-icons";


export default function SuccessScreen({ navigation, route }) {

const {firstName,lastName,country,city,address} = route.params

return (
  <View style={styles.backGround}>
    <View style={{ marginTop: '5%', alignItems: 'center' , flex: 1}}>
      <Text style={[styles.titles, {fontSize: 30}]}>Thank you for buying from our store Complete!</Text>
     <Text>
      <Icon name="FcLike"  style={[styles.icon, {marginBottom: "10%"}]}></Icon>
      </Text>
      <Text style={styles.titles}>for :  {firstName} {lastName} </Text>
      <Text style={styles.titles}>Shipping to : {country}, {city}, {address} </Text>
      <Text style={styles.title}>get you through 21-30 days</Text>
      <TouchableOpacity style={[styles.button_color, {width: '30%', marginTop: "20%"}]} onPress={() => navigation.popToTop()}>
        <Text style={styles.button_text_color}>⬅ Back to store</Text>
      </TouchableOpacity>
    </View>
  </View>
  )

}
