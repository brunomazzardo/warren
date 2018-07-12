//@flow
import React from "react";
import {View,Text} from "react-native";
import type {Client} from '../../screens/ClientScreen'
import Card from "./Card";
import TextField from "./TextField";
import ViewSeparator from "./ViewSeparator";
import {Foundation} from "@expo/vector-icons";



type State = {}

type Props = {
    client : Client
}

class ClientCard extends React.Component<Props,State> {
 constructor(props:Props) {
  super(props);

  this.state = {};

 }

 render() {
     const {client} = this.props
  return(
   <Card style = {{marginBottom:14}}>
       <TextField field={'Nome'}  value={client.name} contentContainerStyle={{padding: 14}} textStyle = {{color:'#0e3a63',fontSize:16}} />
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