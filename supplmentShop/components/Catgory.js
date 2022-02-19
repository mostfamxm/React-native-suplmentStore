import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../assets/styles';

const CategoriesPage = (props) => {
  return (
    <TouchableOpacity style={styles.gridItemCat} onPress={props.onSelect}>
      <View>
      <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={[styles.categoriesPage, {imageBackground:props.imageUrl}]}>
        <ImageBackground source={{ uri: props.Image }} style={styles.Image}>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default CategoriesPage;