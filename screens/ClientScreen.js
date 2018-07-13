//@flow
import React from "react";
import {View, ScrollView, StyleSheet,FlatList,Dimensions,Text} from "react-native";
import ClientCard from "../library/components/ClientCard";
import {ClientService} from "../services/ClientService";
import {LinearGradient} from "expo";
import {Entypo} from "@expo/vector-icons";




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
          <View style = {styles.headerView} >
                <View style={styles.letterIcon}>
                    <Text style = {{color:'white',fontSize:16}} >
                        B
                    </Text>
                </View>
                <Entypo name = {'cog'} style = {{paddingRight: 8}} size = {28} />
          </View>
         <FlatList style = {{flex:1}}  contentContainerStyle={{alignItems: 'center'}}
                   data = {this.state.clientList} keyExtractor = {(item)=> item.id}
            renderItem = {(client) => <ClientCard key = {client.item.id} client={client.item}/>}
         />

      </LinearGradient>
  );
 }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    letterIcon: {
        width:28,
        height:28,
        borderRadius:14,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent: 'center',
    },
    headerView: {
        height: Dimensions.get('window').height * 0.20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:12

    }

});

export default ClientScreen;