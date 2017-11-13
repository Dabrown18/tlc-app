import {connect} from 'react-redux';
import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  Linking
} from 'react-native';

import { StatNavigation } from '../util/router';

import ProfileContent from '../components/profile/ProfileContent';
import ProfileActions from '../actions/profile';

class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Profile',
    headerRight:
      <Button
        title='Settings'
        onPress={() => { navigation.navigate('Settings'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  componentWillMount() {
    const { dispatch, navigation } = this.props;

    const params = navigation.state.params;

    if (params && params.userId ) {
      dispatch(ProfileActions.getUserProfile(params.userId));
    } else {
      dispatch(ProfileActions.getCurrentUserProfile());
    }
  }

  render() {
    const { profile } = this.props;
    return (
      <ProfileContent profile={profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileScreen);