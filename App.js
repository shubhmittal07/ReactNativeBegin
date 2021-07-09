import React from 'react';
import {Text,View,TextInput,Button,StyleSheet} from 'react-native';

export default function App()
{
  return (
    <View style = {styles.screenView}>
      <View style = {styles.inputContainer}>
        <TextInput placeholder = "        Enter your next goal"
        style = {styles.input}/>
        <Button title="ADD" style={{width:'30%'}}/>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({ //using StyleSheet will be optimized in future and it also gives validation
  screenView: {                    // overall it is a good practice to use it
    padding:50,
    width: '100%',
    height: '100%'
  },
  inputContainer: {flexDirection:"row",justifyContent:"space-between",alignContent:"flex-end"},
  input: {width: '70%',borderColor : 'black',borderWidth:2,paddingBottom:5}
});