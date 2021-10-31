import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { Colors } from '../assets/Colors/colors';

export default function Header(props) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, backgroundColor: Colors.boxBackground, borderRadius: 25, alignItems: 'center', justifyContent: 'center', height: 200 }}>
				<Avatar.Image size={50} source={props.Image} style={{ backgroundColor: Colors.avatar }} />
				<Title style={{ paddingTop: 20, color: Colors.primary }}>{props.children}</Title>
			</View>
		</View>
	);
}