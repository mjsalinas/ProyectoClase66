import { View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/NavigationService";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
