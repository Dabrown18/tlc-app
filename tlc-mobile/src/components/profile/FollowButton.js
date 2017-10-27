import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class FollowButton extends Component {
	state = { 
    liked: false, 
  }; 

  _onPressBtn = () => { 
    this.setState({ 
			liked: !this.state.liked, 
		}); 
  } 

	render() {
		const likedStyles = this.state.liked ? styles.liked : null;

		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={this._onPressBtn}  
					style={[styles.button, likedStyles]} 
					underlayColor="#fefefe"
				>
					<Text style={styles.btnText}>Follow</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 8,
		paddingRight: 8
	},
	button: {
    backgroundColor: '#88b0d3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(137,178,224,0.5)',
    borderRadius: 14
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
		margin: 8,
	}
});