import React, { Component } from 'react';
import {
	View,
	Text,
	Linking,
	StyleSheet
} from 'react-native';

import Name from './editProfile/Name';

export default class ProfilePersonal extends Component {

	state = {
    firstName: 'Natalia',
    lastName: 'Kalkopf',
    occupation: 'Dog Lover',
    website: 'http://www.Triune-health.de',
	};

	render() {

		const {
    	firstName,
    	lastName,
    	occupation,
    	website,
    } = this.state;

		return (
			<View style={styles.personal}>
				<Text style={styles.name}>{firstName} {lastName}</Text>
				<Text style={styles.occupation}>{occupation.toUpperCase()}</Text>
				<Text style={styles.websiteText}>
        		WEBSITE:
          	<Text
          		style={styles.website}
          		onPress={() => Linking.openURL('http://www.Triune-health.de')}
          	>
            	{website.toLowerCase()}
          	</Text>
      	</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	personal: {
		padding: 30,
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
  	marginRight: 1,
  	color: '#fff'
	},
	website: {
  	color: '#0000EE',
  	marginTop: 5,
	},
});

