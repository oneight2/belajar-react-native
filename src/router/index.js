import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main, Crud, WelcomeAuth, Login, Register} from '../pages';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Crud" component={Crud} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
