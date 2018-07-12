//@flow

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewSeparator from "./library/components/ViewSeparator";
import Card from "./library/components/Card";
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';



export default class App extends Component<{}> {
  render() {
    return (
      <LinearGradient colors={['#F4C653', '#F4C553', '#FBF855']} style={styles.container}>
          <View style={{justifyContent: 'center',flex:1}} >
              <Card style={{marginHorizontal: 12}}>
                  <Text style={{padding: 14,color:'#0e3a63',fontSize:24}} >
                        e-mail
                  </Text>
                  <ViewSeparator width={0.3} color='#ebeaef'/>
                  <View style = {{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between'}}>
                      <Text style={{padding: 14,color:'#0e3a63',fontSize:24}} >
                          senha
                      </Text>
                      <View style={{borderRadius:12,marginRight: 14,backgroundColor:'#00b564'}} >
                          <MaterialIcons  size = {24} style = {styles.buttonStyle} name = {'arrow-forward'}/>
                      </View>
                  </View>
              </Card>
              <View style = {{flexDirection: 'row'}}>
                  <Text style={{padding: 14,color:'#0e3a63',fontSize:14}} >
                      Esqueci a senha
                  </Text>
                  <Text style={{padding: 14,color:'#0e3a63',fontSize:14}} >
                      Logar com o Facebook
                  </Text>
              </View>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
      padding:4
  }
});
