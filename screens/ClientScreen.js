//@flow
import React from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import ClientCard from "../library/components/ClientCard";
import {ClientService} from "../services/ClientService";
import {LinearGradient} from "expo";




export type Client = {
 id:number,
 name:string,
 number:number
}

type State = {
 clientList : Array<Client>
}

type Props = {}

class ClientScreen extends React.Component<Props,State> {

 constructor(props:Props) {
  super(props);
  this.state = {
   clientList : []
  };
 }


 async componentDidMount(){
  const clientList = await ClientService.list()
  this.setState({clientList})
 }

 render() {
  return(
      <LinearGradient colors={['#F4C854', '#F4C354', '#F6D554','#F8E255','#FAF255','#FBFA55']} style={styles.container}>
         <ScrollView contentContainerStyle={{justifyContent: 'center',flex:1,alignItems: 'center'}} >
          {this.state.clientList.map((client: Client) => <ClientCard key = {client.id} client={client}/>)}
         </ScrollView>
      </LinearGradient>
  );
 }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default ClientScreen;