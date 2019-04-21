/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';

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
      <View style={{ flex: 1, backgroundColor: '#303030' }}>
        <View style={styles.container}>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
          <View style={styles.beatPad}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 70,
    alignItems: 'center'
  },
  beatPad: {
    backgroundColor: '#939393',
    height: 150,
    width: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  }
});
