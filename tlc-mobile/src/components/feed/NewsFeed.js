import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Text,
  ListView,
  StyleSheet,
  View,
} from 'react-native';
import NewsItem from './NewsItem';
import * as globalStyles from './styles/global';
import Spinner from '../Spinner';
import StoryActions from '../../actions/story';

class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      //dataSource: this.ds.cloneWithRows(props.news),
      modalVisible: false
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(StoryActions.getFeed());
  }


  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        onPress={() => this.props.onViewStory(rowData)}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  }

  render() {
    const { story } = this.props;
    let listComponent = null;

    if (!story.listing || story.listing.length === 0) {
      listComponent = <Text style={styles.emptyLabel}>No stories added yet!</Text>;
    } else {
      listComponent = <ListView
        enableEmptySections
        dataSource={this.ds.cloneWithRows(story.listing)}
        renderRow={this.renderRow}
        style={this.props.listStyles}
      />;
    }

    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        {story.status.isLoadingStories && <Spinner/>}
        {listComponent}
      </View>
    );
  }

}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  onViewStory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  story: state.story
});

export default connect(mapStateToProps)(NewsFeed);

const styles = StyleSheet.create({
  emptyLabel: {
    padding: 20,
    color: '#777'
  },
  newsItem: {
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#ccc',
    overflow: 'hidden'
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});
