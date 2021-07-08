import React from 'react';
import {Text,View,Image,ScrollView,TextInput} from 'react-native';

const MyApp = () =>
{
  return(
    <ScrollView style={{padding:10}}>
      <View style={{flex:1,justifyContent:"flex-start",alignContent: "flex-start",paddingVertical:40}}>
      <Text>Hi!</Text>
      </View>
      <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
        <Text> What is your name?</Text>
        <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        </View>
        <TextInput
        style = {{height:40, borderColor: "gray",borderWidth:1}}
        defaultValue = "You can type in me"/>
    </ScrollView>
  );
}

export default MyApp;