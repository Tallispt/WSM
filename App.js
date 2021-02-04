import * as React from 'react';

import MyTabs from './src/components/Tab/index.js';

import { Host } from 'react-native-portalize';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Host>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
        name='Main'
        component={MyTabs}
        options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </Host>
    </NavigationContainer>
  );
}