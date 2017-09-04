import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  LayoutAnimation
} from 'react-native';

import Header from '../components/header';

export default class NotificationsScreen extends Component {
  state = {
    array: [],
    id: 0 
  }

  addNotification() {
    let newArray = this.state.array.slice()
    const newId = this.state.id + 1
    newArray.push({ id: newId })
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState({ array: newArray, id: newId })
  }

  removeItem(id) {
    let newArray = this.state.array.slice()
    const index = newArray.findIndex(item => item.id === id)
    if(index > -1) {
      newArray.splice(index, 1)
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    this.setState({ array: newArray })
  }

  render() {
    const{array} = this.state

    const views = array.map((element, index) => {
      return (
        <View key={element.id} style={styles.notification}>
          <Text style={{ color: '#000', flex: 1, paddingLeft: 5}}>Hello {element.id}</Text>
          <Text style={{ color: '#000', paddingRight: 5}} onPress={() => {this.removeItem(element.id)}}>X</Text>
        </View>
      )
    })

    return (
      <View style={styles.section}>
        <View style={styles.headerSection}>
          <Header />
        </View>
        <View style={styles.contentSection}>

          <Button title='Add' onPress={() => this.addNotification()}>
            
          </Button>

          <View style={styles.container} >
            {views}
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1
  },
  headerSection: {
    flex: 1.08
  },
  contentSection: {
    flex: 8.5
  },
  container: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'rgba(137,178,224,0.5)'
  },
  notification: {
    height: 60,
    margin: 3,
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    padding: 5, 
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});
