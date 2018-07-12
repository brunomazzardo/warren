//@flow
import React from "react";
import {View} from "react-native";
import { createBottomTabNavigator, createStackNavigator, BottomTabBar } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen";
import ClientScreen from "../screens/ClientScreen";
import ConfigScreen from "../screens/ConfigScreen";
const TabBarComponent = (props) => (<BottomTabBar {...props} />);
import {Ionicons} from "@expo/vector-icons";




const ApplicationRouter = () => {
    return createBottomTabNavigator({
        Clientes: ClientScreen,
        Config: ConfigScreen
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Clientes') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'Config') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#0e3a63',
            inactiveTintColor: '#2e4860',
            style : {
                backgroundColor: 'white',

            }
        },
    }

)};

export const createAppStack = () => {
    return createStackNavigator({
        Login: LoginScreen,
        LoggedInTab: ApplicationRouter()
    },{
        headerMode: 'none',
    })}

