import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  Image
} from 'react-native';
import MyButton from '../components/Button/index';

const backgroundImage = require('../images/story-background.jpg');

export default class AddStoryScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: "Let's Get Started",
    headerLeft:
      <Button
        title=''
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('Category');
  };

  render() {

    return (

      <View style={styles.container}>

        <Image source={backgroundImage} style={styles.backgroundImage}>

          <View style={styles.content}>

            <View style={styles.inputContainer}>

              <ScrollView>

                <Text style={styles.inputText}>Story Title:</Text>

                <TextInput
                  onChangeText={title => this.setState({ title })}
                  autoCorrect={false}
                  placeholder="Story title"
                  style={styles.input}
                />

              </ScrollView>

            </View>

            <MyButton 
              next 
              style={styles.btn}
              onPress={this.next}
            >
              <Text style={styles.btnText}>Continue</Text>
            </MyButton> 
          
          </View>

        </Image>

      </View>
    )
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
    paddingTop: 40
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 95,
    flex: 8.5,
  },
  inputContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    padding: 20,
    paddingBottom: 35,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 8
  },
  inputText: {
    fontSize: 20,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5
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
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  },
  btn: {
    margin: 5,
    alignSelf: 'stretch',
  }
});
