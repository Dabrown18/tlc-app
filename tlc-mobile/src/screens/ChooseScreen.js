import React, { Component } from 'react';
import {
	View,
	Text,
  Image,
	StyleSheet,
	Button,
	Platform,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { categories } from '../util/categories';
import MyButton from '../components/Button/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { iconSize } from '../constants';
const backgroundImage = require('../images/login-background.png');

export default class ChooseScreen extends Component {
	constructor(props) {
    super(props);
    this.state = {
      category: categories[0]
    };
  } 

	static navigationOptions = ({ navigation }) => ({
    headerStyle: {
       backgroundColor: '#faf8ec'
    },
    title: "Choose 5 Categories",
    style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

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

  continue = () => {
    this.props.navigation.navigate('Profile');
  };

	render() {

		return (
			<View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <ScrollView>
          <View style={styles.inputContainer}>
  				
              {categories.map((category, index) => this.renderCategoryRow(category, index))}

          </View>
          <MyButton 
              next 
              style={styles.btn} 
              onPress={this.continue}
            >
              <Text style={styles.btnText}>Get Started</Text>
            </MyButton>
          </ScrollView>
            
  			</Image>
      </View>
		);
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
		color: '#000'
	},
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold'
  },
  btn: {
    margin: 10
  }
});
