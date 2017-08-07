import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import Title from './Title';
import AgeSex from './AgeSex';

const Thumbnail = ({ style, titleText, ageSexText, accentColor, url }) => {

  const imageStyle = {
    backgroundColor: `${accentColor}77` // adds some transparency to the color
  };

  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  const AgeSexComponent = <AgeSex style={styles.title}>{ageSexText}</AgeSex>

  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <Image
          style={[styles.image, imageStyle]}
          source={{
            uri: url
          }}
        >
          {TitleComponent}
          {AgeSexComponent}
        </Image>
      ) : (
        <View
          style={[styles.image, imageStyle]}
        >
          {TitleComponent}
          {AgeSexComponent}
        </View>
      )}
    </View>
  );
};

Thumbnail.propTypes = {
  style: View.propTypes.style,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  titleText: PropTypes.string,
  ageSexText: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  image: {
    height: 198,
    width: 362,
    justifyContent: 'flex-start'
  },
  title: {
    padding: 5
  }
});

export default Thumbnail;
