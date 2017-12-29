import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
	main: {
		padding: 10,
		borderRadius: 3
	},
	label: {
		color: '#fff'
	},
	rounded: {
		borderRadius: 20
	}
});

const Login = StyleSheet.create({
	main: {
		backgroundColor: '#89b2e0',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const Info = StyleSheet.create({
	main: {
		backgroundColor: '#3498db'	}
});

const Next = StyleSheet.create({
	main: {
	  	margin: 20,
	  	marginLeft: 20,
	  	marginRight: 20,
	  	padding: 20,
	  	borderColor: '#fff',
	  	backgroundColor: '#89b2e0',
	  	borderRadius: 35,
	  	justifyContent: 'center',
	  	alignItems: 'center'
	}
});

const Default = StyleSheet.create({
	main: {
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},
	label: {
		color: '#333'
	}
});

export default Base;
export {
	Login,
	Info,
	Next,
	Default
};
