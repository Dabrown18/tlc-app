import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
  TouchableOpacity,
	StyleSheet
} from 'react-native';

const msgIcon = require('../images/chat.png');

export default class Comments extends Component {

	state = {
	   comments: '4,832',
  };

  renderStat(options) {
  	return (
  		<TouchableOpacity style={styles.stat}>
    		<Image
      			source={options.icon}
      			style={[styles.icon, options.selected ? styles.selected : null]}
    		/>
    		<Text style={styles.counter}>{options.value}</Text>
  		</TouchableOpacity>
  	);
  }

	render() {

		const {
  		comments,
    } = this.state;

		return (
			<View style={styles.stats}>
			{this.renderStat({ icon: msgIcon, value: comments })}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	stats: {
		flex: 1
	}, 	
	stat: {
		alignItems: 'center',
    	backgroundColor: '#faf8ec',
    	borderColor: '#b1afa4',
    	borderLeftWidth: 1,
    	flex: 1,
    	padding: 10,
	},
  	icon: {
    	tintColor: '#d6d3c5',
    	height: 30,
    	width: 30,
  	},
  	selected: {
    	tintColor: '#88b0d3',
  	},
  	counter: {
    	color: '#000',
    	fontSize: 15,
    	marginTop: 5,
  	}
});