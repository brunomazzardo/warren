//@flow
import React from "react";
import {View,Text} from "react-native";
import type {Client} from '../../screens/ClientScreen'
import Card from "./Card";



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
   <Card key = {client.id}>
       <View style = {{flexDirection: 'row',justifyContent: 'space-between'}}>
           <Text>
               Nome
           </Text>
           <Text>
                {client.name}
           </Text>
       </View>
   </Card>
  );
 }
}



export default ClientCard;