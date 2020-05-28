import React from 'react';
import { View } from 'react-native';
import Test from './src/screens/Test'
import Header from './src/components/Header'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <Test />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test"
            component={Test}
            options={{ title: 'TestScreen' }}
          />
          <Stack.Screen
            name="Header"
            component={Header}
            options={{ title: 'HeadScreen' }}
          />

        </Stack.Navigator>
      </NavigationContainer> */}
    </PaperProvider>
  )
}
export default App;
