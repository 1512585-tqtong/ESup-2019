/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>Welcome to React Native first App!</Text>
          <Text></Text>
          <Text>1512499 - Trần Nguyễn Thiên Thanh</Text>
          <Text></Text>
          <Text>1512585 - Trần Quang Tống</Text>
        </View>
        {/* <Text style={styles.welcome}>Welcome to React Native first App!</Text>
        <Text style={styles.welcome}>1512499 - Trần Nguyễn Thiên Thanh</Text>
        <Text style={styles.welcome}>1512585 - Trần Quang Tống</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
