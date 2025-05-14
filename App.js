import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './Components/Home.js';
import CadastroProduto from './Components/Produto/CadastroProduto.js';
import EditarProduto from './Components/Produto/EditarProduto.js';
import DashboardProduto from './Components/Produto/DashboardProduto.js';

import CadastroUsuario from './Components/Usuario/CadastroUsuario.js';

import EditarUsuario from './Components/Usuario/EditarUsuarios.js';
import ListarUsuario from './Components/Usuario/ListarUsuario.js';

import Login from './Components/Login'; // novo componente


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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Produto"
        component={CadastroProduto}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-shopping-cart" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={ListarUsuario}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-add" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Relatório"
        component={DashboardProduto}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bar-chart" color={color} size={size || 24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EditarProduto" component={EditarProduto}  options={{ headerShown: false }} />
        <Stack.Screen name="ListarUsuario" component={ListarUsuario}  options={{ headerShown: false }} />
        <Stack.Screen name="EditarUsuario" component={EditarUsuario}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}