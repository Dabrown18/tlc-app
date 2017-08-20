import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Base, { Default, Login, Info, Next } from './styles';

class Button extends Component {
	static PropTypes = {
		children: PropTypes.element,
		login: PropTypes.boolean,
		info: PropTypes.boolean,
		style: View.propTypes.style,
		next: PropTypes.boolean,
		onPress: PropTypes.func
	}

	getTheme() {
		const { login, info, next } = this.props;

		if (info) {
			return Info;
		}

		if (next) {
			return Next;
		}

		if (login) {
			return Login;
		}

		return Default;
	}

	render() {
		const theme = this.getTheme();
		const {
			children,
			onPress,
			style,
			rounded
		} = this.props;

		return (
			<TouchableOpacity
				activeOpacity={0.8}
				style={[
					Base.main,
					theme.main,
					rounded ? Base.rounded : null,
					style
				]}
				onPress={onPress}
			>
				<Text style={[Base.label, theme.label]}>{children}</Text>
			</TouchableOpacity>
		);
	}

}

export default Button;