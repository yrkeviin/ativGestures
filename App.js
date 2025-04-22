import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import KevinNavigator from './navigation/KevinNavigator';
import NegaoNavigator from './navigation/RaulNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
