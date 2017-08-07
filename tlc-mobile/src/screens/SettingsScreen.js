import React, { Component } from 'react';
import { 
  ScrollView, 
  TouchableOpacity,
  Vibration,
  Button,
  Platform,
  Alert 
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Settings extends Component {

  showSettingsAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
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
