// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login'
import First from './pages/First';
import Second from './pages/Second';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="SecondPage" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
