import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image
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
        <View key={element._id} style={styles.notification}>
          <View>
            {/*<Image source={{ uri: notification.actionUser.profilePicture.url}} />*/}
          </View>
          <View>
            <Text style={{ color: '#000', flex: 1, paddingLeft: 5}}>{element.title}</Text>
            <Text style={{ color: '#000', paddingRight: 5}} onPress={() => {this.removeNotification(element._id)}}>X</Text>
          </View>
        </View>
      )
    });

    return (
      <View style={styles.section}>
        <View style={styles.headerSection}>
          <Header />
        </View>
        <View style={styles.contentSection}>

        <View style={styles.container} >
          {views}
        </View>
        </View>
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
    flex: 1.08
  },
  contentSection: {
    flex: 8.5
  },
  container: {
    backgroundColor: 'rgba(137,178,224,0.5)'
  },
  notification: {
    height: 60,
    margin: 3,
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    padding: 5, 
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});
