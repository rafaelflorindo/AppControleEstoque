import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from "../../api"; // Arquivo com a configuração do Axios

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("rafaelflorindo@hotmail.com");
  const [senha, setSenha] = useState("123");

  const handleSubmit = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      console.log("Enviando dados:", email, senha);

      const response = await api.post("/auth/login", { email, senha });
      
      console.log("Resposta recebida:", response.data);
      const usuario = JSON.stringify(response.data)

      if (response.data.token) {
        Alert.alert("Sucesso", "Usuário logado com sucesso!");

        // Limpa os campos do formulário
        setEmail("");
        setSenha("");

        // Armazena token e dados do usuário (sem senha)
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('usuario', usuario);
        
        //console.log("Antes de enviar" , usuario);
        
        navigation.navigate("Main", { 
          screen: 'Home', 
          params: {
            usuario: usuario,
            teste: "teste123"
          } 
        });
       
        // navigation.replace("Main", { usuario });
        //navigation.replace("Main");

      } else {
        Alert.alert("Erro", "Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Não foi possível fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.stretch}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.login}>
        <Text style={styles.title}>Autenticação</Text>

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email xxx@xxx.xxx"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite a senha"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroUsuario')}>
          <Text style={styles.buttonText}>Cadastrar Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    backgroundColor: "#ADD8E6",
  },
  logo: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#ADD8E6",
  },
  stretch: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#222",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#444",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 18,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0056b3",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  login: {
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 10,
    height: 400,
  }
});

export default Login;
