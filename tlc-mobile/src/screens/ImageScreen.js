import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import { ImagePicker } from 'expo';

const backgroundImage = require('../images/image-background.jpg');

export default class ImageScreen extends Component {

  state = {
    image: null,
  };

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Choose an Image',
    headerLeft:
      <Button
        title='Back'
        onPress={() => { navigation.navigate('Category'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    headerRight:
      <Button
        title='Next'
        onPress={() => { navigation.navigate('Details'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  


  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <TouchableOpacity 
            title='Press' 
            style={styles.button} 
            onPress={this._pickImage}>
            <Text style={styles.textStyle}>Push</Text>
          </TouchableOpacity>
        </Image>
          {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cafcf1'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40
  },
  image: {
    width: 300,
    height: 225,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4546'
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
