import React, { Component } from 'react';
import _ from 'lodash';
import {
	View,
	StyleSheet,
	Linking,
	Vibration,
	Alert
} from 'react-native';

import Website from './Website';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Snapchat from './Snapchat';
import Patreon from './Patreon';
import Twitter from './Twitter';

export default class Social extends Component {

  /**
	 * Normalizes a social network URL, so that we can feedit to Linking.openURL()
	 *
   * @param url
   * @param socialNetwork This parameter is not used currently
   * @returns {String}
   */
	normalizeAddress(url, socialNetwork) {
		if (/^https?:/.test(url)) {
			return url;
		}
		return `https://${url}`;
	}

  showSnapName(name) {
    Vibration.vibrate();
    Alert.alert(
      'Snapchat Name',
      name,
      [
        { text: 'OK' }
      ]
    );
  }

  render() {
		const { profile } = this.props;
		const { webAddress, twitter, instagram, facebook, snapchat, patreon } = profile.data;

		return (
			<View style={styles.container}>
				{!_.isEmpty(webAddress) && <Website onPress={() => Linking.openURL(this.normalizeAddress(webAddress))} />}
				{!_.isEmpty(twitter) && <Twitter onPress={() => Linking.openURL(this.normalizeAddress(twitter))} />}
				{!_.isEmpty(facebook) && <Facebook onPress={() => Linking.openURL(this.normalizeAddress(facebook))} />}
				{!_.isEmpty(instagram) && <Instagram onPress={() => Linking.openURL(this.normalizeAddress(instagram))} />}
				{!_.isEmpty(snapchat) && <Snapchat onPress={() => this.showSnapName(snapchat)} />}
				{!_.isEmpty(patreon) && <Patreon onPress={() => Linking.openURL(this.normalizeAddress(patreon))} />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	icon: {
		resizeMode: 'contain',
		marginTop: 5,
		marginRight: 5
	}
});