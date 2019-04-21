import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import PropTypes from 'prop-types';
Sound.setCategory('Playback');

export default class BeatPad extends React.Component {
  static propTypes = {
    sound: PropTypes.object
  };

  state = {
    drumSound: null
  };

  componentDidMount() {
    const kickSound = new Sound('http://localhost:3000/sound/kick', null, error => {
      if (error) {
        console.log(error);
      }
      kickSound.play();
    })
    this.setState({
      drumSound: this.props.drumSound || kickSound 
    });
  }

  onBeatPadPress = () => {
    this.state.drumSound.play();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onBeatPadPress}>
        <View style={styles.beatPad} />
      </TouchableWithoutFeedback>
    );
  }
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