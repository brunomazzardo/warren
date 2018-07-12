//@flow
import React from "react";
import {View, ScrollView} from "react-native";
import ClientCard from "../library/components/ClientCard";
import {ClientService} from "../services/ClientService";




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
   <ScrollView contentContainerStyle={{justifyContent: 'center',flex:1,alignItems: 'center'}} >
       {this.state.clientList.map((client: Client) => <ClientCard key = {client.id} client={client}/>)}
   </ScrollView>
  );
 }
}



export default ClientScreen;