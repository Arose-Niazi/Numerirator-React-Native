import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../assets/Colors/colors';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Button from '../Components/Button';
import Header from '../Components/Header';


const methods = ['Bi-Section', 'Regula-Falsi', 'Newton Raphson', 'Secent', "Do Little's", "Crout's"];

const theme = {
	...DefaultTheme,
	roundness: 10,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.primary,
		accent: Colors.secondary
	},

};


export default function MainMenu(props) {
	return (<PaperProvider theme={theme}>
		<View style={{ flex: 1, margin: 30, marginBottom: 0 }}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'space-between'
				}}
				showsVerticalScrollIndicator={false}
			>
				<Header Image={require('../assets/Images/Gears.png')}>Numeritator</Header>
				<View style={{ flex: 2, paddingTop: 30, paddingBottom: 10 }}>
					{
						methods.map((item, index) => (
							<Button key={index} onPress={() => { console.log("Pressed"); }}>{item}</Button>
						))
					}
					<Button style={{ backgroundColor: "#ffb300" }} onPress={() => props.navigation.navigate('Settings')}>Settings</Button>
				</View>
			</ScrollView>
		</View>
	</PaperProvider>
	);
};