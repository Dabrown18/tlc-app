import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import Spinner from '../components/Spinner';
import StoryActions from '../actions/story';
import { NavigationActions } from 'react-navigation'

const backgroundImage = require('../images/submit-background.png');

class SubmitScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Submit',
    headerLeft:
        <Button
          title='Back'
          onPress={() => { navigation.navigate('Details'); }}
          backgroundColor='rgba(0,0,0,0)'
          color='rgba(0,122,255,1)'
        />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  showError = (msg) => {
    Alert.alert('Add Story', msg);
    return false;
  };

  submit = () => {
    const { dispatch, story } = this.props;
    dispatch(StoryActions.addStory())
      .then(() => {
        dispatch(StoryActions.getFeed());

        const resetAction = NavigationActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: 'Story'})
          ]
        });

        this.props.navigation.dispatch(resetAction);

        this.props.navigation.navigate('Home')
      })
      .catch(() => this.showError('Failed to add story! Please try again!'));
  };

  render() {
    const { story } = this.props;

    return (

      <View style={styles.container}>

        <Image source={backgroundImage} style={styles.backgroundImage}>

          <View style={styles.containerTwo}>

            {/*<Text style={styles.textStyle}>*/}
              {/*Proof read before submitting*/}
            {/*</Text>*/}

            {/*<Text style={styles.textStyle}>*/}
              {/*{story.story.details}*/}
            {/*</Text>*/}

            <View style={styles.spinnerStyle}>
              {story.status.isSaving && <Spinner size="small" />}
            </View>

            <View style={styles.buttonContainer}>

              <TouchableOpacity onPress={this.submit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

            </View>

          </View>

        </Image>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81c4de'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  },
  containerTwo: {
    flex: 3
  },
  spinnerStyle: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 10,
    borderColor: '#fff',
    backgroundColor: '#ff4546',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  image: {
    width: 400,
    height: 350,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => ({
  story: state.story
});

export default connect(mapStateToProps)(SubmitScreen);