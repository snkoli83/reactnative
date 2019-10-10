import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'roSamadhan';
  return (
  	<View>
  	  <Text style={Styles.textTitle}>Getting started with react native!</Text>
      <Text style={ Styles.textName }>My name is { name }</Text>
  	</View>
  );
};

const Styles = StyleSheet.create({
  textTitle: {
  	fontSize: 45
  },
  textName: {
    fontSize: 20
  }
});

export default ComponentsScreen;