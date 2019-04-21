/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import BeatPad from './BeatPad';

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
          <BeatPad />
          <BeatPad />
          <BeatPad />
          <BeatPad />
          <BeatPad />
          <BeatPad />
          <BeatPad />
          <BeatPad />
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
  }
});
