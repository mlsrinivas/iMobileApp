import React from 'react';
import 'react-native-gesture-handler';
import Test from '../screens/Test'
import Test2 from '../screens/Test2'
import Test3 from '../screens/Test3'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Header" 
            component={Header} 
            options={{title: 'My Header'}}
        />
        <Stack.Screen 
            name="Test3" 
            component={Test3} 
        />
      </Stack.Navigator>
  );
}

const User = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
              name="Test" 
              component={Test} 
          />
        </Stack.Navigator>
    );
}
  
const AddContacts = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
              name="Test2" 
              component={Test2} 
              options={{title: 'New Test2'}}
          />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="Contacts" 
                component={HomeStack} 
                options={{title: 'Contacts'}}
            />
            <Tab.Screen 
                name="Me"   
                component={User}
                options={{title: 'Me'}} 
            />
            <Tab.Screen 
                name="Add Contacts" 
                component={AddContacts} 
                options={{title: 'Add Contact'}}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default MyTabs;
