import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
//1. declarar el tipado de las pantallas con sus parametros
export type RootStackParamList ={
    LoginScreen: undefined,
    HomeScreen: {email: string }, 
    RegisterScreen: undefined
};

//2. crear el stack navigator encargado de manejar la navegacion 
const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utilizar el stack de navegacion 
export default function StackNavigator (){
    return(
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name='LoginScreen' component={Login} />
            <Stack.Screen name='RegisterScreen' component={Register} />
            <Stack.Screen name='HomeScreen' component={Home} />
        </Stack.Navigator>
    );
}

