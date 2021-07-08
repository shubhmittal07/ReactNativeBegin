import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';

export default function App()
{
  return (
    <View style = {{padding :50}}>
      <View style = {{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}>
        <TextInput placeholder = "Enter your next goal"
        style = {{width: '70%',borderColor : 'black',borderWidth:2,paddingBottom:5}}/>
        <Button title="ADD" style={{width:'30%'}}/>
      </View>
    </View>

  );
}