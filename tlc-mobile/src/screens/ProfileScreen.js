import {connect} from 'react-redux';
import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  Linking,
  View
} from 'react-native';

import { StatNavigation } from '../util/router';

import ProfileContent from '../components/profile/ProfileContent';
import ProfileActions from '../actions/profile';

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerStyle: params.headerStyle,
      title: params.title || 'Profile',
      headerRight: params.headerRight,
      style: params.style
    };
  };

  _setNavigationParams(params) {
    const { navigation } = this.props;
    const headerStyle = { backgroundColor: '#faf8ec' };
    const title = 'Profile';
    const style = { marginTop: Platform.OS === 'android' ? 24 : 0 };

    const headerRight = <Button
      title='Settings'
      onPress={() => { navigation.navigate('Settings'); }}
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0,122,255,1)'
    />;

    navigation.setParams({
      ...params,
      headerStyle,
      title,
      style,
      headerRight: (params.isCurrentUser === true || typeof(params.isCurrentUser) === 'undefined') ? headerRight : null
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('r', getCurrentRouteName(nextProps.nav))
      if (getCurrentRouteName(nextProps.nav) === 'CurrentUserProfile' && getCurrentRouteName(this.props.nav) !== 'CurrentUserProfile') {
        console.log('GETTING IN SCREEN');
        this.prepareScreenAndLoadProfile();
      }
  }

  prepareScreenAndLoadProfile = () => {
    const { dispatch, navigation } = this.props;
    const params = navigation.state.params;

    this._setNavigationParams(params || {});

    if (params && params.userId ) {
      dispatch(ProfileActions.getUserProfile(params.userId));
    } else {
      dispatch(ProfileActions.getCurrentUserProfile());
    }
  };

  componentWillMount() {
    //this.prepareScreenAndLoadProfile();
  }

  render() {
    const { profile, navigation } = this.props;
    const isCurrentUser = navigation.state.params && navigation.state.params.isCurrentUser;
    const currentUserId = navigation.state.params && navigation.state.params.userId;

    console.log('nav',  navigation.state.params);
    console.log('currentUserId', currentUserId);

    return (
      <ProfileContent
        isCurrentUser={isCurrentUser}
        currentUserId={currentUserId}
        profile={profile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  nav: state.nav
});

export default connect(mapStateToProps)(ProfileScreen);