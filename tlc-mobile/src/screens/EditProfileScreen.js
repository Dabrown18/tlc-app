import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	Platform,
	StyleSheet,
	TouchableHighlight,
	Animated,
	Image,
	ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
	Username,
	FirstName,
	LastName,
	Occupation,
	WebAddress,
	Facebook,
	Instagram,
	Twitter,
	Patreon,
	Snapchat
} from '../components/Edit';

export default class EditProfileScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Edit Profile',
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
	})

	render() {

		return (
			<KeyboardAwareScrollView style={{ backgroundColor: '#fff'}} >
				<View style={styles.inputContainer}>
					<Username />
	        <FirstName />
	        <LastName />
	        <Occupation />
	        <WebAddress />
	        <Facebook />
	        <Instagram />
	        <Twitter />
	        <Patreon />
	        <Snapchat />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
        	<Text style={styles.buttonText}>Save Changes</Text>
        </TouchableHighlight>
      </KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	inputContainer: {
  	margin: 20,
  	marginBottom: 0,
  	padding: 20,
  	paddingBottom: 10,
  	alignSelf: 'stretch',
  	borderWidth: 1,
  	borderColor: '#fff',
  	backgroundColor: 'rgba(137,178,224,0.2)',
  	borderRadius: 8
  },
	input: {
  	fontSize: 16,
  	height: 40,
  	padding: 10,
  	marginBottom: 10,
  	backgroundColor: 'rgba(255,255,255,1)',
  	textAlign: 'left',
  	borderRadius: 8
	},
	buttonText: {
		fontSize: 16,
    textAlign: 'center',
    color: "#fff"
	},
	button: {
		alignSelf: 'stretch',
  	margin: 20,
  	padding: 20,
  	borderColor: '#fff',
  	backgroundColor: '#89b2e0',
  	borderRadius: 8
	},
	logo: {
		width: 350,
  	height: 100,
  	alignItems: 'flex-start',
  	justifyContent: 'center',
  	resizeMode: 'contain'
	},
	textStyle: {
		fontSize: 12,
		fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
	}
});