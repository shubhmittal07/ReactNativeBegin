import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';

export default function App()
{
  return (
    <View style = {{padding :30}}>
      <View>
        <TextInput placeholder = "Enter your next goal"/>
        <Button title="ADD"/>
      </View>
    </View>

  );
}