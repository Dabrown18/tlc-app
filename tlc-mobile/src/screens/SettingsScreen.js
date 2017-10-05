import React, { Component } from 'react';
import { 
  ScrollView, 
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Settings extends Component {

  showSettingsAlert() {
    const keys = ['authToken', 'userId'];
    AsyncStorage.multiRemove(keys)
      .then(() => {
        this.props.navigation.navigate('Login');
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
