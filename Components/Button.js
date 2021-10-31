import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button as DefaultButton } from 'react-native-paper';
import { Colors } from '../assets/Colors/colors';

const styles = StyleSheet.create({
	myButton: {
		height: 60,
		backgroundColor: '#E9B741',
		justifyContent: 'center',
		marginTop: 10,
	}
});

export default class Button extends React.Component {

	render() {
		const color = this.props.color ? this.props.color : Colors.secondary;
		const mode = this.props.mode ? this.props.mode : "contained";
		const allProps = Object.assign({}, this.props, {
			style: [styles.myButton, this.props.style], color: color, mode: mode, contentStyle: { height: '100%' }
		});

		return (
			<DefaultButton  {...allProps}>{this.props.children}</DefaultButton>
		);
	}
}