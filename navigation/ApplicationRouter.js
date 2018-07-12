//@flow
import React from "react";
import {View} from "react-native";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen";
import ClientScreen from "../screens/ClientScreen";
import ConfigScreen from "../screens/ConfigScreen";




const ApplicationRouter = () => {
    return createBottomTabNavigator({
        Clients: ClientScreen,
        Config: ConfigScreen
})};

export const createAppStack = () => {
    return createStackNavigator({
        Login: LoginScreen,
        LoggedInTab: ApplicationRouter()
    },{
        headerMode: 'none',
    })}

