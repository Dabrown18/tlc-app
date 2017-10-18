import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import PropTypes from 'prop-types';

const ChangeImage = require('./images/change-photo.png');

export default class PickImage extends React.Component {
  static propTypes = {
    onChooseImage: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage}>
          <Image source={ChangeImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  _pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.props.onChooseImage({
        uri: image.path,
        cancelled: false,
        mime: image.mime,
        size: image.size,
        width: image.width,
        height: image.height
      });
    }).catch(() => {
      // NOP
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start'
  }
});