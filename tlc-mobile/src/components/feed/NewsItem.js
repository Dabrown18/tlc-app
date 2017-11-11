import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import moment from 'moment';

export default class NewsItem extends Component {

  render() {
    const {
      style,
      category,
      thumbnail,
      title,
      user,
      onPress
    } = this.props;

    return (
      <TouchableOpacity
        style={style}
        onLongPress={this.onLongPress}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: thumbnail.url }} style={styles.thumbnail}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.footer}>
              <Text style={styles.footerText}>{moment().diff(user.birthDate, 'year')} year-old {user.gender} | {category}</Text>
              <TouchableOpacity style={styles.bookmarkBtn}>
                <Text style={styles.bookmarkBtnText}>Bookmark</Text>
              </TouchableOpacity>
            </View>
          </Image>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style,
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 230,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  footer: {
    flexDirection: 'row',
    padding: 7,
    backgroundColor: '#B6CAE2',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  footerText: {
    flex: 0.8,
    color: '#fff',
    fontSize: 15,
    fontWeight: '500'
  },
  bookmarkBtn: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: '#7AA3DB',
    padding: 5,
  },
  bookmarkBtnText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff'
  },
  content: {
    paddingHorizontal: 5,
    borderRadius: 8
  }
});
