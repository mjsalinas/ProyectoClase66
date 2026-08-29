import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text  } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function Home({route}: HomeProps){
    //extraccion de propiedad de parametros de ruta por medio de destructuring
    const {email} = route.params;
    return(
        <View>
            <Text>Bienvenido, {email} </Text>
        </View>
    )
}