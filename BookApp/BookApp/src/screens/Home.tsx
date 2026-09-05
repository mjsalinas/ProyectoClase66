import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";

type NestedProps = CompositeScreenProps<
  BottomTabScreenProps<TabsParamList, "HomeTab">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Home({ navigation, route }: NestedProps) {
  //extraccion de propiedad de parametros de ruta por medio de destructuring
  const { email } = route.params;

  const handleUserSettings = () => {
    navigation.navigate("Settings");
  };

  const handleLogout = () => {};

  const handleNavigate = () => {};

  return (
    <View style={styles.container} >
      <Text style={styles.welcome}>Bienvenido, {email} </Text>

      <CustomButton
        title="Ir a Preferencias de Usuario"
        onPress={handleUserSettings}
        variant="primary"
      />
      <CustomButton
        title="Cerrar Sesion"
        variant="secondary"
        onPress={handleLogout}
      />
      <CustomButton
        title="Ir atras"
        variant="tertiary"
        onPress={handleNavigate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingBottom: 40, alignItems: "center" },
  welcome: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
});
