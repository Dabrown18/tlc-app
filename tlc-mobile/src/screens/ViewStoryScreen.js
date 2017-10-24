import React, { Component } from 'react';
import {
  Platform,
  Button,
  View,
  Text, 
  StyleSheet, 
  Image, 
  ScrollView
} from 'react-native';

import Reactions from '../reactions';

const photo = require('../reactions/images/marriedCouple.jpg');

export default class App extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#faf8ec'
    },
    title: 'Story Details',
    headerLeft:
      <Button
        title='Back'
        onPress={() => { navigation.navigate('Home'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  render() {
    const { story } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={styles.imageContainer}>
            <Image source={{ uri: story.thumbnail.url}} style={styles.photoStyle}/>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{story.title}</Text>
          </View>

          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>
              Username: 
            </Text> 
            <Text> JButler650</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              Date: 
            </Text> 
            <Text> 6/22/2017</Text>
          </View>

          <View>
            <Text style={styles.detailText}>{story.details}</Text>

            <Reactions />

            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>
                COMMENTS
              </Text>
            </View>

          </View>

        </ScrollView>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingLeft: 12
  },
  imageContainer: {
    paddingBottom: 10
  },
  photoStyle: {
    width: 350,
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 8
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  usernameText: {
    color: '#89b2e0',
    fontSize: 17,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 30
  },
  dateText: {
    color: '#89b2e0',
    fontSize: 17,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingBottom: 5
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 25
  },
  detailText: {
    paddingBottom: 10
  },
  commentContainer: {
    padding: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  commentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#89b2e0'
  }
});
