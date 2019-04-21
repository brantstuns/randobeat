import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');


const BeatPad = props => {
  return (
    <View style={styles.beatPad}/>
  );
}

const styles = StyleSheet.create({
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

export default BeatPad;