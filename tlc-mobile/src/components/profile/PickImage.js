import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

const ChangeImage = require('./images/change-photo.png');

export default class ChooseImage extends React.Component {
  state = {
    image: null,
  };

  render() {
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage}>
          <Image source={ChangeImage}/>
        </TouchableOpacity>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 300 }} />}
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
    alignItems: 'flex-start', 
    justifyContent: 'flex-start'
  }
});