import React from 'react';
import { View } from 'react-native';
import Test from './src/Screens/Test'
import Header from './src/Components/Header'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Header"
          component={Header}
          options={{ title: 'HeadScreen' }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ title: 'TestScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
