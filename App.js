//@flow

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import {createAppStack} from "./navigation/ApplicationRouter";



export default class App extends Component<{}> {
  render() {
    const AppNavigator = createAppStack()

    return (
    <View style={{flex:1}}>
        <AppNavigator/>
    </View>
    );
  }
}


