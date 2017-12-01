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

class LoggedUserProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: '#faf8ec' },
    title: 'Profile',
    headerRight: <Button
      title='Settings'
      onPress={() => { navigation.navigate('Settings'); }}
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0,122,255,1)'
    />,
    style: { marginTop: Platform.OS === 'android' ? 24 : 0 }
  });

  componentWillReceiveProps(nextProps) {
    // console.log('r', getCurrentRouteName(nextProps.nav))
    //   if ((getCurrentRouteName(nextProps.nav) === 'CurrentUserProfile' && getCurrentRouteName(this.props.nav) !== 'CurrentUserProfile') ||
    //     (getCurrentRouteName(nextProps.nav) === 'Profile' && getCurrentRouteName(this.props.nav) !== 'Profile')) {
    //     console.log('GETTING IN SCREEN');
    //     this.prepareScreenAndLoadProfile(nextProps);
    //   }
  }

  loadProfile = () => {
    this.props.dispatch(ProfileActions.getCurrentUserProfile());
  };

  componentWillMount() {
    this.loadProfile();
  }

  render() {
    const { profile } = this.props;

    console.log('lop', profile);

    return (
      <ProfileContent
        isCurrentUser
        profile={profile.main}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  profile: state.profile,
  nav: state.nav
});

export default connect(mapStateToProps)(LoggedUserProfileScreen);