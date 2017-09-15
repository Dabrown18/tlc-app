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
import MyButton from '../components/Button/index';
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
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>
            {category}
          </Text>
        </View>
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
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  next = () => {
    this.props.navigation.navigate('Image');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inputContainer}>
            
              {categories.map((category, index) => this.renderCategoryRow(category, index))}
          </View>
          <MyButton 
            next 
            style={styles.btn}
            onPress={this.next}
          >
            <Text style={styles.btnText}>Continue</Text>
          </MyButton>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8ec'
  },
  inputContainer: {
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 8
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    paddingTop: 40,
  },
  header: {
    paddingTop: 20
  },
  categoryContainer: {
    margin: 3,
    padding: 3,
    borderWidth: 1,
    borderColor: 'rgba(137,178,224,1)',
    backgroundColor: '#fff',
    borderRadius: 8
  },
  categoryRow: {
    flexDirection: 'row',
    margin: 5
  },
  categoryText: {
    fontSize: 20,
    color: '#02255b'
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  },
  btn: {
    margin: 5,
    alignSelf: 'stretch',
  }
});

function mapStateToProps(state) {
  let {user, story} = state;
  return {user, story};
}
