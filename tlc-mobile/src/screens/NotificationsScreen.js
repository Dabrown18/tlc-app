import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Header from '../components/Header';
import NotificationActions from '../actions/notification';

class NotificationsScreen extends Component {

  removeNotification(id) {
    // let newArray = this.state.array.slice()
    // const index = newArray.findIndex(item => item.id === id)
    // if(index > -1) {
    //   newArray.splice(index, 1)
    // }
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    // this.setState({ array: newArray })
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(NotificationActions.getUserNotifications());
  }

  render() {
    const { notification } = this.props;

    const views = notification.listing.map(element => {
      return (
        <TouchableOpacity key={element._id} style={styles.notification}>
          <Image
            style={styles.thumbnail}
            source={{uri: element.actionUser.profilePicture.url}} />
          <View style={styles.notificationData}>
            <Text style={styles.textContainer}>
              <Text style={styles.author}> {element.actionUser.firstName} {element.actionUser.lastName} </Text>
              <Text style={styles.text}>{element.title}.</Text>
              <Text style={styles.date}> {moment(element.creationDate).fromNow()} </Text>
            </Text>
          </View>
        </TouchableOpacity>
      )
    });

    return (
      <View style={styles.section}>
        <Header />
        <ScrollView style={styles.contentSection}>
          <View style={styles.container} >
            {views}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  notification: state.notification
});

export default connect(mapStateToProps)(NotificationsScreen);

const styles = StyleSheet.create({
  section: {
    flex: 1
  },
  headerSection: {
    flex: 1
  },
  contentSection: {
    flex: 1
  },
  container: {
    // backgroundColor: 'rgba(137,178,224,0.5)'
  },
  notification: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  thumbnail: {
    width: 50,
    height: 67,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  notificationData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  author: {
    paddingHorizontal: 5,
    fontWeight: 'bold'
  },
  textContainer: {
    paddingHorizontal: 5
  },
  text: {
    color: '#444'
  },
  date: {
    color: '#999',
    paddingHorizontal: 10
  }
});
