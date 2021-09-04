import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ProductScreen from '../Product/ProductScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomBarScreen() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      activeColor="#f30d44"
      inactiveColor="gray"
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="credit-card-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBarScreen;
