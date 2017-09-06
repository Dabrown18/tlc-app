import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import MyButton from '../Button/index';

const backgroundImage = require('./images/background.jpg');
const lock = require('./images/lock.png')

export default class Help extends Component {
	constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

	render() {
		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
					<View style={styles.inputContainer}>
						<Image source={lock} style={styles.lock}/>
						<Text style={styles.header}>Can't Login?</Text>
						<Text style={styles.paragraph}>Enter your Username or Email and</Text>
						<Text style={styles.paragraph}>we will send you a link to get back into</Text>
						<Text style={styles.paragraph}>your account.</Text>
						<Text style={styles.headerTwo}>Username or Email</Text>
						<TextInput 
							value={this.state.email}
			        onChangeText={content => this.setState({ content })}
			        autoCorrect={false}
			        placeholder="Type Here"
			        style={styles.input}
						/>
					</View>
          <MyButton
            next
            style={styles.btn}
          >
            <Text style={styles.btnText}>Send Login Link</Text>
          </MyButton>
				</Image>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    paddingTop: 40,
  },
  inputContainer: {
		margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.6)',
    borderRadius: 8,
    alignItems: 'center'
  },
  lock: {
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 15,
    margin: 10
  },
  header: {
  	fontWeight: 'bold',
  	fontSize: 18,
  	color: '#fff'
  },
  headerTwo: {
  	marginTop: 6,
  	fontWeight: 'bold',
  	fontSize: 18,
  	color: '#fff'
  },
  paragraph: {
  	marginTop: 2,
  	color: '#fff',
  	fontSize: 12,
  	fontWeight: 'normal'
  },
  input: {
  	marginTop: 5,
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    borderRadius: 8
  },
  btn: {
    margin: 3
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  }
});