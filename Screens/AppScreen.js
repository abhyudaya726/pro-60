import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default class AppScreen extends React.Component{
  render(){
    return(
      <View style={style.container}>
        <TouchableOpacity style={[style.button, {marginTop: 0}]}>
          <Text style={style.buttonText}>Albert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.button, {marginTop: 50}]}>
          <Text style={style.buttonText}>Brittany</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.button, {marginTop: 50}]}>
          <Text style={style.buttonText}>Robert</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    marginTop:10,
    marginRight:100,
    marginLeft:150,
  },
  button:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})