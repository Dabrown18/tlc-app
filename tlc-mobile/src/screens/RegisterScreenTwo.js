import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
  Text,
	Button,
	Platform,
	Image,
  ScrollView,
	StyleSheet
} from 'react-native';

import RaceSelector from '../components/RaceSelector';
import backgroundImage from '../images/login-background.png';
import RegisterActions from '../actions/register';

export class RegisterScreenTwo extends Component {
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

  next = (state) => {
    const { ethnicity } = state;
    const { dispatch } = this.props;

    dispatch(RegisterActions.registerStep2(ethnicity));
    this.props.navigation.navigate('PartThree');
  };

	render() {
		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
          <ScrollView>
  					<RaceSelector onNext={this.next} />
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
  }
});

export default connect()(RegisterScreenTwo);