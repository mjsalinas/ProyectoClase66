import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text  } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, 'HomeTab'>,
    NativeStackScreenProps<RootStackParamList>
    >;

export default function Home({navigation, route}: NestedProps){
    //extraccion de propiedad de parametros de ruta por medio de destructuring
    const {email} = route.params;
    return(
        <View>
            <Text>Bienvenido, {email} </Text>
        </View>
    )
}