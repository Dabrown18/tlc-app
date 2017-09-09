import React, { Component } from 'react';
import {
	View,
	Button,
  Text,
	Platform,
	Image,
	StyleSheet
} from 'react-native';

import MyButton from '../components/Button/index';
import backgroundImage from '../images/login-background.png';

export default class RegisterScreenFour extends Component {

	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: "Let's Begin",
    headerLeft:
        <Button
            title='Back'
            onPress={() => { navigation.navigate('PartThree'); }}
            backgroundColor='rgba(0,0,0,0)'
            color='rgba(0,122,255,1)'
        />,
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('Choose');
  };

	render() {
		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
					<MyButton 
						next
						style={styles.btn} 
            onPress={this.next}
					>
						<Text style={styles.btnText}>Get Started</Text>
					</MyButton>
				</Image>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#faf8ec',
	},
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    paddingTop: 40,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  },
  btn: {
    margin: 10
  },
  selector: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

