import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'
import { StripeProvider } from '@stripe/stripe-react-native';

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import DashboardScreen from './screens/DashboardScreen'
import CreateProfileScreen from './screens/CreateProfileScreen'
import DatePickerScreen from './screens/DatePickerScreen'
import MembershipScreen from './screens/MembershipScreen'
import PaymentScreen from './screens/PaymentScreen'
import ScheduleScreen from './screens/ScheduleScreen'
import SchedulerDatePickerScreen from './screens/SchedulerDatePickerScreen'

const Stack = createStackNavigator();


export default function App() {
  const publishableKey = 'pk_test_51JBV77Bx3sk3b5mAVAw5Zdo4LgAb7PAeW68BAlOr3uXSNCUD2ZSE14qpGzYU3saAv3r8VaBo58tgy4C6J4QqEYdQ00RVutqzQV';

  return (
    <StripeProvider publishableKey={publishableKey}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Dashboard" component={DashboardScreen}/>
          <Stack.Screen name="DatePicker" component={DatePickerScreen}/>
          <Stack.Screen name="CreateProfile" component={CreateProfileScreen} options={{title: 'Create your profile'}}/>
          <Stack.Screen name="Membership" component={MembershipScreen}/>
          <Stack.Screen name="Payment" component={PaymentScreen}/>
          <Stack.Screen name="Schedule" component={ScheduleScreen}/>
          <Stack.Screen name="SchedulerDP" component={SchedulerDatePickerScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}

{/* <Stack.Navigator screenOptions={globalScreenOptions} ></Stack.Navigator> */}