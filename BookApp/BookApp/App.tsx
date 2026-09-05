import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { navigationRef } from './src/navigation/NavigationService';

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
  );
}


