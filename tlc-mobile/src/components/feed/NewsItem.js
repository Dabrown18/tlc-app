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
          </Image>
          <View style={styles.footer}>
            <Text style={styles.footerText}>{moment().diff(user.birthDate, 'year')} year-old {user.gender} | {category}</Text>
            <TouchableOpacity style={styles.bookmarkBtn}>
              <Text style={styles.bookmarkBtnText}>Bookmark</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style,
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 180,
    padding: 10
  },
  title: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#99c0e3'
  },
  footerText: {
    flex: 0.8,
    color: '#fff',
    fontSize: 12,
    fontWeight: '700'
  },
  bookmarkBtn: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: '#66a0c3',
    padding: 5,
  },
  bookmarkBtnText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#fff'
  },
  content: {
    paddingHorizontal: 5,
    borderRadius: 8
  }
});
