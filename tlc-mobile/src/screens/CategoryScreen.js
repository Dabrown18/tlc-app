import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { categories } from '../util/categories';
import Icon from 'react-native-vector-icons/FontAwesome';
import { iconSize } from '../constants';

export default class CategoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: categories[0]
    };
  }

  // TODO this function will also add this story to the categories reference in the database
  submit() {
    let json = {category: this.state.category};
    this.props.updateStory(json, this.props.user.uid);
    this.props.navigator.push({name: 'photoPicker'});
  }

  renderCategoryRow(category, index) {
    return (
      <TouchableOpacity
        key={index}
        style={styles.categoryRow}
        onPress={() => this.setState({category})}
      >
        <Text style={styles.categoryText}>
          {category}
        </Text>
        {
          this.state.category === category ?
          <Icon size={iconSize} name="check-circle" style={styles.headerIcon}/> :
          <Icon size={iconSize} name="circle" style={styles.headerIcon}/>
        }
      </TouchableOpacity>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: 'Choose a Category',
    headerLeft:
      <Button
        title='Back'
        onPress={() => { navigation.navigate('Story'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    headerRight:
      <Button
        title='Next'
        onPress={() => { navigation.navigate('Image'); }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.pageBody}>
          <ScrollView>
            {categories.map((category, index) => this.renderCategoryRow(category, index))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageBody: {
    flex: 20,
    justifyContent: 'flex-start'
  },
  headerIcon: {
    color: '#000'
  },
  headerIconFilled: {
    color: 'red'
  },
  categoryText: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function mapStateToProps(state) {
  let {user, story} = state;
  return {user, story};
}
