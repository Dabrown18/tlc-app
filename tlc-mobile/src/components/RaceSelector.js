import React, { Component } from 'react';
import {
	View,
	Picker,
	Text,
	StyleSheet
} from 'react-native';

export default class RaceSelector extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	category: 'White'
	  };
	}

	onValueChange(key, value) {
		console.log(key + '' + value)
		this.setState({ category: value });
	}

	render() {
		return (
			<View>
				<View style={styles.pickerContainer}>
					<Picker 
						itemStyle={{borderRadius: 8, color:'white'}} 
						enabled={true}
						selectedValue={this.state.category} 
						onValueChange={this.onValueChange.bind(this, 'category')}
					>
						<item label="White" value="White" />
						<item label="Black/African American" value="Black" />
						<item label="Hispanic/Latino" value="Latin" />
						<item label="American Indian or Alaska Native" value="American Indian" />
						<item label="Asian" value="Asian" />
						<item label="Native Hawaiian or other Pacific Islander" value="Pacific Islander" />
						<item label="Arab/Middle Eastern" value="Arab" />
						<item label="Multiracial" value="Multiracial" />
					</Picker>	
					<View style={styles.textContainer}>
						<Text style={styles.text}>{this.state.category}</Text>
					</View>			
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pickerContainer: {
		margin: 20,
    marginTop: 0,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 8
	},
	textContainer: {
		marginBottom: 8,
    padding: 8,
    borderColor: '#fff',
    backgroundColor: '#89b2e0',
    borderRadius: 8
	},
	text: {
		fontSize: 20,
  	textAlign: 'center',
  	color: "#fff",
  	fontWeight: 'bold'
	}
});