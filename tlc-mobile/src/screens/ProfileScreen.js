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
      //...params,
      headerStyle,
      title,
      style,
      headerRight: params.isCurrentUser ? headerRight : null
    });
  }

  componentWillReceiveProps(nextProps) {
  }

  prepareScreenAndLoadProfile = (props) => {
    const { navigation, session } = props;
    const params = navigation.state.params;
    const isCurrentUser = params.userId === session.userId;

    this._setNavigationParams({
      ...params,
      isCurrentUser
    });

    this.props.dispatch(ProfileActions.getUserProfile(params.userId));
  };

  componentWillMount() {
    this.prepareScreenAndLoadProfile(this.props);
  }

  render() {
    const { profile, navigation, session } = this.props;
    const isCurrentUser = navigation.state.params.userId === session.userId;

    return (
      <ProfileContent
        isCurrentUser={isCurrentUser}
        profile={profile.other}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  profile: state.profile,
  nav: state.nav
});

export default connect(mapStateToProps)(ProfileScreen);