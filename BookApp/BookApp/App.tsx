import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {

  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}


