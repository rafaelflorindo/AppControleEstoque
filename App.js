import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Components/Home.js';
import CadastroProduto from './Components/CadastroProduto.js';
import EditarProduto from './Components/EditarProduto.js';
import DashboardProduto from './Components/DashboardProduto.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        }, headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastro" component={CadastroProduto} />
      <Tab.Screen name="Relatório" component={DashboardProduto} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}