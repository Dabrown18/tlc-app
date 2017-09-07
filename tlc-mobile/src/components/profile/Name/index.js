import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet
} from 'react-native';

export default class Name extends Component {

	constructor(props) {

		super(props);

		this.changeFirstName = this.changeFirstName.bind(this);
		this.changeLastName = this.changeLastName.bind(this);
	}

	changeFirstName(e) {
		var firstName = e.target.value;
		this.props.onChange(firstName);
	}

	changeLastName(e) {
		var lastName = e.target.value;
		this.props.onChange(lastName);
	}

	render() {
		return (
			<View>
				<Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	name: {
		color: '#fff',
    	fontFamily: 'Helvetica',
    	fontSize: 30,
    	fontWeight: 'bold',
	}
})

