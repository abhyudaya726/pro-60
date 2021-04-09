import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import AppScreen from './Screens/AppScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  AppScreen : AppScreen
})

const AppContainer = createAppContainer(AppNavigator)
