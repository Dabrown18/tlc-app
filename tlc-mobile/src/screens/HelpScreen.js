import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import Help from '../components/Help';

export default class HelpScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: "Help Page",
    headerLeft:
        <Button
            title='Back'
            onPress={() => { navigation.navigate('Login'); }}
            backgroundColor='rgba(0,0,0,0)'
            color='rgba(0,122,255,1)'
        />,
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

	help = () => {
	  this.props.navigation.navigate('Login');
  };

	render() {
		return (
			<View style={styles.container}>
				<Help onHelp={this.help} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#faf8ec'
	}
});