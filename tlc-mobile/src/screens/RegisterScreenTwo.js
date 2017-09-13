import React, { Component } from 'react';
import {
	View,
  Text,
	Button,
	Platform,
	Image,
  ScrollView,
	StyleSheet
} from 'react-native';

import MyButton from '../components/Button/index';
import RaceSelector from '../components/RaceSelector';
import backgroundImage from '../images/login-background.png';

export default class RegisterScreenTwo extends Component {
	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Race/Ethnicity',
    headerLeft:
        <Button
            title='Back'
            onPress={() => { navigation.navigate('Register'); }}
            backgroundColor='rgba(0,0,0,0)'
            color='rgba(0,122,255,1)'
        />,
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('PartThree');
  };

	render() {
		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
          <ScrollView>
  					<RaceSelector />
            <MyButton 
              next 
              style={styles.btn} 
              onPress={this.next}
            >
              <Text style={styles.btnText}>Next</Text>
            </MyButton>
          </ScrollView>
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
  }
});