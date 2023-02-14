import React, {Component} from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Field from './components/Field';
import params from './params';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o mines!</Text>
        <Text style={styles.welcome}>
          Tamanho da Grade: {params.getRowsAmount()} x{' '}
          {params.getColumnsAmount()}
        </Text>
        <Field />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
  },
});
