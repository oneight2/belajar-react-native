import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main, Crud} from '../pages';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Crud" component={Crud} />
    </Stack.Navigator>
  );
};

export default Router;
