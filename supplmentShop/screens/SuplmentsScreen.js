import React from 'react';
import {FlatList, View } from 'react-native';
import styles from '../assets/styles'
import { SUPLMENTS, SUPLMENTS } from '../data/dummy-data';
import SuplmentsPage from '../components/SuplmentsPage'

export default function ObjectsPageScreen({ route, navigation }) {
  const { categoryId } = route.params;
  // array of all products - belong to that category

  const suplments = SUPLMENTS.filter(suplment => suplment.categoryIds[0] == categoryId);
  // Call ItemsGrid
  const renderItem = ({ item }) => {
    return (
      <SuplmentsPage
        Image={item.imageUrl}
        title={item.title}
        price={item.price}
        itemId={item.id}
        fullItem={item}
        onSelectProduct={() => { navigation.navigate("AboutProduct", { productId: item.id, productName: item.title }); }}
      />
    )
  }

  return (
    <View style={styles.backGround}>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
    

  );
}

