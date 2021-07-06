import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import * as firebase from 'firebase'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import DashboardScreen from './screens/DashboardScreen'
import CreateProfileScreen from './screens/CreateProfileScreen'
import DatePickerScreen from './screens/DatePickerScreen'
import MembershipScreen from './screens/MembershipScreen'
import PaymentScreen from './screens/PaymentScreen'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="DatePicker" component={DatePickerScreen}/>
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen}/>
        <Stack.Screen name="Membership" component={MembershipScreen}/>
        <Stack.Screen name="Payment" component={PaymentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{/* <Stack.Navigator screenOptions={globalScreenOptions} ></Stack.Navigator> */}