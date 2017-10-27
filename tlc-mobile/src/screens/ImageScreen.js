import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
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
import MyButton from '../components/Button/index'
import {isEmpty} from '../util/validator';
import StoryActions from '../actions/story';

const backgroundImage = require('../images/image-background.jpg');

class ImageScreen extends Component {

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
        onPress={() => navigation.state.params.nextHandler()}
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

  componentDidMount() {
    this.props.navigation.setParams({
      nextHandler: this.next
    });
  }

  next = () => {
    const { image } = this.state;
    const { dispatch } = this.props;

    if (isEmpty(image)) {
      this.showError('Please select image');
      return;
    }

    dispatch(StoryActions.setThumbnail({
      uri: image,
      mimeType: 'image/jpeg'
    }));

    this.props.navigation.navigate('Details');
  };

  render() {
    let { image } = this.state;
    const btnText = image ? 'Change Selected Image' : 'Select an Image';

    return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <Text>Choose a Thumbnail</Text>
          <Text>For your image</Text>
          <MyButton 
            next 
            style={styles.btn}
            onPress={this._pickImage}
          >
            <Text style={styles.btnText}>{btnText}</Text>
          </MyButton>
          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
        </Image>
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
    backgroundColor: '#faf8ec'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 10,
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
  },
  btn: {
    margin: 10
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  }
});

export default connect()(ImageScreen);
