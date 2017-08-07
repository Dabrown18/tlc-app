import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView
} from 'react-native';

import Reactions from '../reactions';

const photo = require('../reactions/images/marriedCouple.jpg');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={styles.imageContainer}>
            <Image source={photo} style={styles.photoStyle}/>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>When The Water Runs Dry</Text>
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
            <Text style={styles.detailText}>
              "My wife and I dated 7 years before got married. The 10th year anniversary 
              is coming up next month. In total, we know each other for 17 years. We have two 
              children 4 and 6. I think we just don’t like each other anymore. She criticized 
              everything I did and I do the same to her — even small things like cleaning the 
              dishes, putting clothes away, etc. We fought (verbally) often (3-5 times a week) 
              on small things. From what I can tell, these small things are just symptoms of 
              bigger problems.

              The passion and love between us appear to be dead for a few years. I confronted 
              her a few days ago asking her what she thinks the problems are: she told me 
              because the little things bug her: not hanging the coats in the closet, not 
              cleaning the washroom, not cleaning the floor, etc. To be honest, I do most of 
              the cooking, dishes, laundry, etc. The only thing I don’t do in the house is 
              clean the washroom (seldom) and sweep/mop the floor. I don’t think these are 
              the problems. We had a cleaner for a year or so but it did not work out. We’re 
              in the process of hiring another cleaner."
            </Text>

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
