import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  } from 'react-native';

import { Ionicons as Icon } from "react-native-vector-icons";
import styles from '../assets/styles';
import MainAppScreen from '../screens/MainAppScreen';
import AboutSuplmentScreen from '../screens/AboutSuplmentScreen';
import CartScreen from '../screens/CartScreen'
import PaymentScreen from '../screens/PaymentScreen';
import SuplmentsScreen from '../screens/SuplmentsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {cart} from '../data/dummy-data';



const Stack = createNativeStackNavigator();

export default function ClothingNavigator(props) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions = {({navigation}) => ({
          headerTintColor: 'black',
          headerRight: () => (
            <Icon
              onPress={() => 
                navigation.navigate("Shopping cart",{numOfProd: cart.length()})
              }
              name="cart"
              style={styles.styleIcons}
            />
          ),

        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={() => ({ title: "Clothing-Shop" })} />
        <Stack.Screen
          name="ObjectsPage"
          component={ObjectsPageScreen}
          options={({ route }) => ({ title:route.params.categoryName})}
        />
        <Stack.Screen
          name="AboutProduct"
          component={AboutProductScreen}
          options={({ route }) => ({ title: route.params.productName })}
        />
        <Stack.Screen 
          name="Shopping cart" 
          component={BasketScreen}
          options={({route}) => ({ title: 'Shopping cart '})}
          />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}