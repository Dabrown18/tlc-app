import React, { Component } from 'react';
import { 
  ScrollView, 
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
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
        <List title="Account">
          <TouchableOpacity>
            <ListItem
              title="Edit Profile"
              onPress={this.editProfile}
            />
          </TouchableOpacity>
        </List>
        <List>
          <TouchableOpacity>
            <ListItem
              title="Sign Out"
              rightIcon={{ name: 'cancel' }}
              onPress={() => this.showSettingsAlert()}
            />
          </TouchableOpacity>
        </List>
      </ScrollView>
    );
  }
}

export default connect()(Settings);