import React, { Component } from 'react';
import {
	View,
	StyleSheet 
} from 'react-native';

import ProfilePersonal from './ProfilePersonal';
import ProfileStats from './ProfileStats';
import Social from './Social';

export default class ProfileInfo extends Component {
	render() {
		return (
			<View style={styles.info}>
				<ProfilePersonal profile={this.props.profile} />
				<ProfileStats />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	info: {
		...StyleSheet.absoluteFillObject,
	    backgroundColor: 'rgba(0,0,0,0.5)',
	    top: null,
	}
});
