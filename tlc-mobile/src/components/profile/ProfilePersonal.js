import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import Follow from './Follow';
import Social from './Social';
import Spinner from '../Spinner';

export default class ProfilePersonal extends Component {

	render() {
		const { profile } = this.props;

		if (!profile || profile.isFetching || !profile.data) {
			return <Spinner />;
		}

		const { occupation } = profile.data;

		return (
				<View style={styles.personal}>
					<Text style={styles.name}>{profile.data.firstName} {profile.data.lastName}</Text>
					<Text style={styles.occupation}>{(occupation || '').toUpperCase()}</Text>
					<Social profile={profile} />
					<Follow />
				</View>
		);
	}
}

const styles = StyleSheet.create({
	personal: {
		padding: 20,
	},
	name: {
		color: '#fff',
  	fontFamily: 'Helvetica',
  	fontSize: 30,
  	fontWeight: 'bold',
	},
	occupation: {
  	color: '#88b0d3',
  	marginTop: 5,
	},
	websiteText: {
	marginTop: 2,
  	marginRight: 2,
  	color: '#fff'
	},
	website: {
  	color: '#0000EE',
  	marginTop: 5,
	},
});

