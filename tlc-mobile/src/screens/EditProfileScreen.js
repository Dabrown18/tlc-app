import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Alert,
	View,
	Text,
	Platform,
	StyleSheet,
	TouchableHighlight,
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

import Spinner from '../components/Spinner';
import ProfileActions from '../actions/profile';

export class EditProfileScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Edit Profile',
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
	});

	state = {
		isLoaded: false
	};

	componentWillMount() {
		const { dispatch } = this.props;

		dispatch(ProfileActions.getCurrentUserProfile());
	}

  componentWillReceiveProps(nextProps) {
		if (this.props.profile !== nextProps.profile && !this.state.isLoaded && nextProps.profile.data) {
			console.log('profile', nextProps.profile);
			this.setState({
				isLoaded: true,
				...nextProps.profile.data
			});
		}
	}

	onSave = () => {
		const { username, email, firstName, lastName, webAddress, occupation, facebook, snapchat, instagram, twitter, patreon } = this.state;
		const { dispatch } = this.props;

		console.log('state', this.state);

		dispatch(ProfileActions.updateCurrentUserProfile({
				username,
				email,
				firstName,
				lastName,
				webAddress,
				occupation,
				facebook,
				snapchat,
				twitter,
				instagram,
				patreon
			}))
			.then(() => Alert.alert('', 'Profile updated with success!'));
	};

	render() {
		const { profile } = this.props;

		return (
			<KeyboardAwareScrollView style={{ backgroundColor: '#fff'}} >
        {this.state.isLoaded ?
					<View style={styles.inputContainer}>
						<Username value={this.state.username} onChangeText={username => this.setState({ username })} />
						<FirstName value={this.state.firstName} onChangeText={firstName => this.setState({ firstName })} />
						<LastName value={this.state.lastName} onChangeText={lastName => this.setState({ lastName })} />
						<Occupation value={this.state.occupation} onChangeText={occupation => this.setState({ occupation })} />
						<WebAddress value={this.state.webAddress} onChangeText={webAddress => this.setState({ webAddress })} />
						<Facebook value={this.state.facebook} onChangeText={facebook => this.setState({ facebook })} />
						<Instagram value={this.state.instagram} onChangeText={instagram => this.setState({ instagram })} />
						<Twitter value={this.state.twitter} onChangeText={twitter => this.setState({ twitter })} />
						<Patreon value={this.state.patreon} onChangeText={patreon => this.setState({ patreon })} />
						<Snapchat value={this.state.snapchat} onChangeText={snapchat => this.setState({ snapchat })} />
					</View>
					: <Spinner />
        }
        <TouchableHighlight style={styles.button} onPress={this.onSave} underlayColor='#99d9f4'>
					<View>
						{profile.isUpdating && <Spinner />}
						<Text style={styles.buttonText}>Save Changes</Text>
					</View>
        </TouchableHighlight>
      </KeyboardAwareScrollView>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps)(EditProfileScreen);

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