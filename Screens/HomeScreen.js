import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = () => {
    this.props.navigation.navigate('AppScreen');
  };
  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={this.goToBuzzerScreen}>
          <Text style={style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 200,
    marginRight: 100,
    marginLeft: 150,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
