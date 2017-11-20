import React, { Component } from 'react';
import { 
  ScrollView, 
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import { List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'
import Router from '../actions/router';
import { connect } from 'react-redux';

export class Settings extends Component {

  showSettingsAlert() {
    const keys = ['authToken', 'userId'];
    AsyncStorage.multiRemove(keys)
      .then(() => {
        //this.props.navigation.navigate('Login');
        // const resetAction = NavigationActions.reset({
        //   index: 0,
        //   key: null,
        //   actions: [
        //     NavigationActions.back(),
        //   ]
        // });
        // this.props.navigation.dispatch(resetAction);
        const { dispatch } = this.props;
        dispatch(Router.logout());
      });
  }

  editProfile = () => {
    this.props.navigation.navigate('EditProfile');
  };

  render() {
    return (
      <ScrollView>
        <SettingsList>
          <SettingsList.Header headerText='ACCOUNT SETTINGS' headerStyle={{color:'#000', marginTop:15}}/>
          <SettingsList.Item 
            title='Edit Profile'
            onPress={this.editProfile} />
          <SettingsList.Item 
            title='Switch to Business Account'
            hasNavArrow={false}
            hasSwitch={true} />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item 
            title='Sign Out'
            onPress={() => this.showSettingsAlert()} />
        </SettingsList>
      </ScrollView>
    );
  }
}

export default connect()(Settings);