import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainMenu from './Pages/MainMenu';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Pages/Settings';

const Stack = createNativeStackNavigator();


const methods = ['Bi-Section', 'Regula-Falsi', 'Newton Raphson', 'Secent', "Do Little's", "Crout's"];

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={{ margin: 0, padding: 0 }}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >

          <Stack.Screen
            name="Main Menu"
            component={MainMenu}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};