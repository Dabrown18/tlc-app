import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  AsyncStorage,
	View,
	Button,
  Text,
	Platform,
	Image,
  ScrollView,
	StyleSheet
} from 'react-native';

import DualPicker from '../components/DualPicker';
import MyButton from '../components/Button/index';
import BirthdaySelector from '../components/BirthdaySelector';
import backgroundImage from '../images/login-background.png';
import RegisterActions from '../actions/register';

export class RegisterScreenThree extends Component {
	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
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
  });

	state = {
	  gender: 'Male',
    birthDate: '2016-05-15'
  };

	componentWillMount() {
	  const { dispatch } = this.props;
	  dispatch(RegisterActions.resetStatus());
  }

  register = () => {
    const { dispatch, registerData } = this.props;
    const { gender, birthDate } = this.state;
    const { username, firstName, lastName, email, password, ethnicity } = registerData;

    dispatch(RegisterActions.registerStep3(gender, birthDate));
    dispatch(RegisterActions.register(username, firstName, lastName, email, password, ethnicity, gender, birthDate))
      .then(response => {
        const keyValues = [
          ['authToken', response.action.payload.token],
          ['userId', response.action.payload.user._id]
        ];

        dispatch(RegisterActions.resetStatus());

        AsyncStorage.multiSet(keyValues)
          .then(() => {
            this.props.navigation.navigate('Choose');
          });
      });
  };

	render() {
	  const { status } = this.props;
	  const { birthDate, gender } = this.state;

		return (
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.backgroundImage}>
          <ScrollView>
            <View style={styles.inputContainer}>
              <DualPicker
                title='Gender'
                options={[{symbol: '♂', title: 'Male'}, {symbol: '♀', title: 'Female'}]}
                ref="sexPicker"
                initialState={gender}
                onChange={gender => this.setState({ gender })}
              />
              <BirthdaySelector date={birthDate} onChange={birthDate => this.setState({ birthDate })} />
            </View>
            <Text style={styles.errorTextStyle}>
              {status.error && status.error}
            </Text>
            <MyButton
              next 
              style={styles.btn} 
              onPress={this.register}
            >
              <Text style={styles.btnText}>Register</Text>
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
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
});

const mapStateToProps = (state) => ({
  registerData: state.register.profile,
  status: state.register.status
});

export default connect(mapStateToProps)(RegisterScreenThree);