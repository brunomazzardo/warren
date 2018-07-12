//@flow
import React from "react";
import {StyleSheet, View,Text} from "react-native";
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';




type State = {}

type Props = {
    column?:boolean,
    field:string,
    value:string | number,
    textStyle?:StyleObj,
    fieldStyle?:StyleObj,
    valueStyle?:StyleObj,
    contentContainerStyle?:StyleObj
}

class TextField extends React.Component<Props,State> {


     constructor(props:Props) {
      super(props);
     }

    _handleFieldStyle = () => {
         const {textStyle,fieldStyle} = this.props
         return [styles.fieldStyle,textStyle,fieldStyle]
     }


    _handleValueStyle = () => {
        const {textStyle,valueStyle} = this.props
        return [styles.valueStyle,textStyle,valueStyle]
     }


    _handleContentStyle = () => {
        const {contentContainerStyle,column} = this.props
        let columnStyle = {}
        if(column)
            columnStyle = {flexDirection: 'column'}
        return [styles.containerStyle,contentContainerStyle,columnStyle]
    }

    render() {
      const fieldStyle = this._handleFieldStyle()
      const valueStyle = this._handleValueStyle()
      const contentContainerStyle = this._handleContentStyle()
      const {field,value} = this.props
      return(
       <View style={contentContainerStyle}>
           <Text style={fieldStyle} >
               {field}
           </Text>
           <Text style={valueStyle} >
               {value}
           </Text>
       </View>
      );
     }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fieldStyle : {
    }

});



export default TextField;