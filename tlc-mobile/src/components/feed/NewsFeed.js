import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView
} from 'react-native';
import NewsItem from './NewsItem';
import SmallText from './SmallText';
import * as globalStyles from './styles/global';

export default class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      modalVisible: false
    };

    this.renderRow = this.renderRow.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  onModalClose() {
    this.setState({
      modalVisible: false,
      modalUrl: undefined
    });
  }

  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url
    });
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView
            scalesPageToFit
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    );
  }

  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        onPress={() => this.onModalOpen(rowData.url)}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  }

  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={this.props.listStyles}
        />
        {this.renderModal()}
      </View>
    );
  }

}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style
};

NewsFeed.defaultProps = {
  news: [
    {
      title: 'When the Water Runs Dry',
      sex: 'Male',
      age: '36',
      agesex: 'Male 36',
      category: 'Dying Relationships',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/04/food-couple-sweet-married.jpg',
      description: 'Build Native Mobile Apps using JavaScript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'http://www.theladieschampion.com/marital-issues/'
    },
    {
      title: 'Should I Tell Him How I Feel?',
      sex: 'Female',
      age: '27',
      category: 'Infidelity',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/06/Should-I-tell-him-how-I-feel.jpg',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Packt Publishing',
      location: 'Birmingham, UK',
      url: 'http://www.theladieschampion.com/should-i-tell-him-how-i-feel/'
    },
    {
      title: 'My Disrespectful Boyfriend',
      sex: 'Female',
      age: '21',
      category: 'Disrespectful Lover',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/06/portrait-girl-streetart-woman.jpg',
      description: 'Build Native Mobile Apps using JavaScript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'http://www.theladieschampion.com/my-disrespectful-boyfriend/'
    },
    {
      title: 'How Could He Move On So Fast?',
      sex: 'Female',
      age: '25',
      category: 'Moving On',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/05/Why-they-move-on-so-fast.jpg',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Packt Publishing',
      location: 'Birmingham, UK',
      url: 'http://www.theladieschampion.com/how-could-they-move-on-so-fast/'
    },
    {
      title: 'She Wants To Go On A Break',
      sex: 'Male',
      age: '22',
      category: 'Taking a Break',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/05/She-wants-to-go-on-a-break-full.jpg',
      description: 'Build Native Mobile Apps using JavaScript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'http://www.theladieschampion.com/she-wants-to-go-on-a-break/'
    },
    {
      title: 'Dump For The Ex',
      sex: 'Male',
      age: '21',
      category: 'Infidelity',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/05/dawn-sunset-couple-love-medium-full.jpg',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Packt Publishing',
      location: 'Birmingham, UK',
      url: 'http://www.theladieschampion.com/she-dumps-you-for-her-ex/'
    },
    {
      title: 'Why Did She Break Up With Me?',
      sex: 'Male',
      age: '24',
      category: 'Break Up',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/05/Why-Did-She-Break-Up-With-Me.jpg',
      description: 'Build Native Mobile Apps using JavaScript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'http://www.theladieschampion.com/why-did-she-break-up-with-me/'
    },
    {
      title: 'The Bitchy Girlfriend',
      sex: 'Male',
      age: '27',
      category: 'Disrespectful Lover',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/05/The-Bitchy-Girlfriend-full.jpg',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Packt Publishing',
      location: 'Birmingham, UK',
      url: 'http://www.theladieschampion.com/the-bitchy-girlfriend/'
    },
    {
      title: 'I Thought We Were A Couple',
      sex: 'Male',
      age: '25',
      category: 'Being Mislead',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/04/Alejandra-Quiroz-Full.jpg',
      description: 'Build Native Mobile Apps using JavaScript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'http://www.theladieschampion.com/i-thought-we-were-a-couple/'
    },
    {
      title: 'The Other Woman',
      sex: 'Female',
      age: '27',
      category: 'Infidelity',
      imageUrl: 'http://www.theladieschampion.com/wp-content/uploads/2016/03/Neill-Kumar-Full.jpg',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Packt Publishing',
      location: 'Birmingham, UK',
      url: 'http://www.theladieschampion.com/the-other-woman/'
    }
  ]
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
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
