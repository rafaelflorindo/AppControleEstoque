//https://ionic.io/ionicons
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Ionicons } from 'react-native-vector-icons/Ionicons';

import Home from './Home';

import Cadastro from './Components/Produto/CadastroScreen';
import Editar from './Components/Produto/Editar';
import Relatorio from './Components/Produto/Relatorio';
import ListarProdutos from './Components/Produto/ListarProdutos';

import CadastroUsuario from './Components/Usuario/CadastroUsuario';
import EditarUsuario from './Components/Usuario/EditarUsuario'
import Login from './Components/Usuario/Login';
import Sair from './Sair';

import ListarUsuarios from './Components/Usuario/ListarUsuarios';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" 
    screenOptions={{
      tabBarStyle:{
        height:80,
        paddingBottom:10,
        paddingTop:10
      },headerShadow: false,
    }}>
      <Tab.Screen name="Home" component={Home} 
      options={{ 
          tabBarIcon:({color, size})=>(
            <Icon name='home' color={color} size={size || 24} />
          ),
        headerShown: false }} />
        
      <Tab.Screen name="Produtos" component={ListarProdutos} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='fast-food-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        } />
        <Tab.Screen name="Estoque" component={ListarProdutos} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='albums-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        } />
      <Tab.Screen name="Usuários" component={ListarUsuarios} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='people-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        }/>
        <Tab.Screen name="Perfil" component={ListarUsuarios} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='person-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        }/>
        <Tab.Screen name="Sair" component={Sair} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='person-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        }/>
      <Tab.Screen name="Relatório" component={Relatorio} 
      options={
        { 
          tabBarIcon:({color, size})=>(
            <Icon name='newspaper-outline' color={color} size={size || 24} />
          ),
        headerShown: false }
        } />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' options={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Editar" component={Editar} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />

        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }} />
        <Stack.Screen name="EditarUsuario" component={EditarUsuario} options={{ headerShown: false }} />
        <Stack.Screen name="ListarUsuarios" component={ListarUsuarios} options={{ headerShown: false }} />
        <Stack.Screen name="ListarProdutos" component={ListarProdutos} options={{ headerShown: false }} />    
        <Stack.Screen name="Sair" component={Sair} options={{ headerShown: false }} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
