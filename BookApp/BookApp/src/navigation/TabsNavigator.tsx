import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import Home from "../screens/Home";

//1. declarar el tipado de las pantallas con sus parametros
export type TabsParamList ={
    Profile: undefined,
    Settings: undefined, 
    HomeTab: {email:string},
};

//2. crear el tabs navigator encargado de manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el navegador por tabs
export default function TabNavigator (){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Settings' component={Settings}/>
            <Tab.Screen name='HomeTab' component={Home} initialParams={{email:"usuario"}}/>
        </Tab.Navigator>
    )
}

