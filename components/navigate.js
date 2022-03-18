import 'react-native-gesture-handler';
import React from 'react';
import Pictures from './Pictures';
import FullPicture from './FullPicture';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pictures"
          component={Pictures}
          options={{
            title: 'Gallery',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 70,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="FullPicture"
          component={FullPicture}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
