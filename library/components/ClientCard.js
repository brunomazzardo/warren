//@flow
import React from "react";
import {View, Text, TouchableHighlight, Dimensions} from "react-native";
import type {Client} from '../../screens/ClientScreen'
import Card from "./Card";
import TextField from "./TextField";
import ViewSeparator from "./ViewSeparator";
import {Foundation} from "@expo/vector-icons";
import Swipeable from 'react-native-swipeable';




type State = {}

type Props = {
    client : Client
}

class ClientCard extends React.Component<Props,State> {
 constructor(props:Props) {
  super(props);

  this.state = {};

 }


     rightButtons = [
        <TouchableHighlight>
            <Text>Button 1</Text>
        </TouchableHighlight>,
    ];


 render() {
  const {client} = this.props
  return(
   <Card style = {{marginBottom:14}}>
       <Swipeable children={this.rightButtons}  rightButtonWidth = {60}  style={{width : Dimensions.get('window').width * 0.80}} >
            <TextField field={'Nome'}  value={client.name} contentContainerStyle={{padding: 14}} textStyle = {{color:'#0e3a63',fontSize:16}} />
       </Swipeable>
       <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between'}} >
           <Text style={{color:'#0e3a63',fontSize:16,paddingLeft: 14,paddingBottom: 14}} >
               Principal Ativo
           </Text>
           <Foundation name = {'bitcoin'} style = {{paddingRight: 14}} size = {24} />
       </View>
       <ViewSeparator width={1} color='#ebeaef'/>
       <TextField field={'Número'} value={client.number} contentContainerStyle={{padding: 14}} textStyle = {{color:'#0e3a63',fontSize:16}} />
   </Card>
  );
 }
}



export default ClientCard;