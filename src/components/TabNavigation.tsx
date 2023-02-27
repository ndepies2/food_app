import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import StoreScreen from '../screens/StoreScreen';
import PromotionScreen from '../screens/PromotionScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';



const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconSize;
        let iconColor;

        if (route.name === 'Store') {
          iconName = 'store';
          iconSize = focused ? 25 : 20; //change the size of the icons if they are selected
          iconColor = focused ? 'blue' : 'grey'; //sets the color of the Icon
        } else if (route.name === 'Promotions') {
          iconName = 'tag';
          iconSize = focused ? 25 : 20;
          iconColor = focused ? 'blue' : 'grey';
        }else if (route.name === 'Cart') {
          iconName = 'shopping-cart';
          iconSize = focused ? 25 : 20;
          iconColor = focused ? 'blue' : 'grey';
        } else if (route.name === 'Profile') {
          iconName = 'user';
          iconSize = focused ? 25 : 20;
          iconColor = focused ? 'blue' : 'grey';
        }

        // You can return any component that you like here!
        return  <FontAwesome5 name={iconName} size={iconSize} color ={iconColor}/>; //<Ionicons name={iconName} size={size} color={color} />
      },
      //tabBarActiveTintColor: 'blue',
      //tabBarInactiveTintColor: 'gray', //sets color below and tint
      //tabBarActiveBackgroundColor: '#fff',
      //tabBarInactiveBackgroundColor: '#999',
      tabBarShowLabel: true,
      tabBarLabelStyle: { fontSize: 11},
      tabBarStyle: { color: 'grey'},
  
    })}
  >
    <Tab.Screen 
      name="Store" 
      component={StoreScreen}
      options={{tabBarBadge: 3}} //adds a badge for notifications
    />
    <Tab.Screen 
      name="Promotions" 
      component={PromotionScreen} 
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})