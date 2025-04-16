import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import CadastroScreen from './CadastroScreen';
import Editar from './Editar'

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Cadastro' component={CadastroScreen} />
        <Stack.Screen name='Editar' component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}