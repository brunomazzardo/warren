//@flow
import React from "react";
import {StyleSheet, Text, View,TouchableOpacity} from "react-native";
import Card from "../library/components/Card";
import ViewSeparator from "../library/components/ViewSeparator";
import {MaterialIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo";




type State = {}

type Props = {
    navigation : any
}

class LoginScreen extends React.Component<Props,State> {
 constructor(props:Props) {
  super(props);

  this.state = {};

 }

 render() {
  return(
      <LinearGradient colors={['#F4C854', '#F4C354', '#F6D554','#F8E255','#FAF255','#FBFA55']} style={styles.container}>
          <View style={{justifyContent: 'center',flex:1,alignItems:'center'}} >
              <Card>
                  <Text style={{padding: 14,color:'#0e3a63',fontSize:24}} >
                      e-mail
                  </Text>
                  <ViewSeparator width={0.3} color='#ebeaef'/>
                  <View style = {{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between'}}>
                      <Text style={{padding: 14,color:'#0e3a63',fontSize:24}} >
                          senha
                      </Text>
                      <TouchableOpacity  onPress = {()=>this.props.navigation.navigate('LoggedInTab')}  style={{borderRadius:12,marginRight: 14,backgroundColor:'#00b564'}} >
                          <MaterialIcons  color = {'white'} size = {24} style = {styles.buttonStyle} name = {'arrow-forward'}/>
                      </TouchableOpacity>
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

export default LoginScreen;