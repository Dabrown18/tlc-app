import React, { Component } from 'react';
import {
	TouchableOpacity,
	Image,
	StyleSheet,
	Vibration,
	Alert
} from 'react-native';

const Icon = require('./images/snapchat.png');

export default class Snapchat extends Component {

	showSnapName() {
    Vibration.vibrate();
    Alert.alert(
      'Snapchat Name',
      'LadiesChampion',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

	render() {
		return (
			<TouchableOpacity {...this.props} onPress={() => this.showSnapName()}>
				<Image source={Icon} style={styles.icon} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		resizeMode: 'contain',
		marginTop: 5,
		marginRight: 5
	}
});