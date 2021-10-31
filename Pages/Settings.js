import * as React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Colors } from '../assets/Colors/colors';


export default function Settings(props) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 20, alignItems: 'center', }}>
				<IconButton
					icon="arrow-left-drop-circle-outline"
					color={Colors.primary}
					size={40}
					onPress={() => props.navigation.goBack()}
				/>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
			</View>
			<View style={{ flex: 5 }}></View>
		</View >
	);
};