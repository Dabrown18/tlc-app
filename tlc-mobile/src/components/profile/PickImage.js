import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import PropTypes from 'prop-types';
import FollowButton from './FollowButton';

const ChangeImage = require('./images/change-photo.png');

export default class PickImage extends React.Component {
  static propTypes = {
    onChooseImage: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this._pickImage}>
            <Image source={ChangeImage}/>
          </TouchableOpacity>
        </View>
        <View>
          <FollowButton />
        </View>
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
      this.props.onChooseImage(result);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'space-between'
  }
});