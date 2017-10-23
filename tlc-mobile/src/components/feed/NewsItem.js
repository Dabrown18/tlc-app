import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ActionSheetIOS
} from 'react-native';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import Card from './Card';
import * as globalStyles from './styles/global';

export default class NewsItem extends Component {

  constructor(props) {
    super(props);

    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Bookmark', 'Cancel'],
      cancelButtonIndex: 1,
      title: this.props.title
    }, buttonIndex => console.log('Button selected', buttonIndex));
  }

  render() {
    const {
      style,
      category,
      thumbnail,
      title,
      details,
      creationDate,
      location,
      onPress
    } = this.props;
    const accentColor = globalStyles.ACCENT_COLORS[
      this.props.index % globalStyles.ACCENT_COLORS.length
    ];
    return (
      <TouchableOpacity
        style={style}
        onLongPress={this.onLongPress}
        onPress={onPress}
      >
        <Card>
          <Thumbnail
            url={thumbnail.url}
            category={category}
            details={details}
            creationDate={creationDate}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          />
        </Card>
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
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5,
    borderRadius: 8
  }
});
