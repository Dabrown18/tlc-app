import React, { Component } from 'react';
import {
	View,
	Button,
  Text,
	Platform,
	Image,
	StyleSheet
} from 'react-native';

import DualPicker from '../components/DualPicker';
import MyButton from '../components/Button/index';
import BirthdaySelector from '../components/BirthdaySelector';
import backgroundImage from '../images/login-background.jpg';

export default class RegisterScreenTwo extends Component {
	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#fff'
    },
    title: 'Gender & Birthday',
    headerLeft:
        <Button
            title='Back'
            onPress={() => { navigation.navigate('PartTwo'); }}
            backgroundColor='rgba(0,0,0,0)'
            color='rgba(0,122,255,1)'
        />,
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('PartFour');
  };

	render() {
		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.inputContainer}>
            <DualPicker
              title='Gender'
              options={[{symbol: '♂', title: 'Male'}, {symbol: '♀', title: 'Female'}]}
              ref="sexPicker"
            />
            <BirthdaySelector />
          </View>
          <MyButton 
            next 
            style={styles.btn} 
            onPress={this.next}
          >
            <Text style={styles.btnText}>Next</Text>
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
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 8
  }
});