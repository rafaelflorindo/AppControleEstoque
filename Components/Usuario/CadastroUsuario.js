import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

import api from "../../services/api"; // Arquivo com a configuração do Axios

const CadastroUsuario = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [reSenha, setReSenha] = useState("");
  
  const handleSubmit = async () => {
    if (!nome || !email || !senha || !reSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      console.log("Erro", "Preencha todos os campos.");
      return;
    }
  
    if (senha !== reSenha) {
      Alert.alert("Erro", "Senhas não conferem.");
      console.log("Erro", "Senhas não conferem.");
      return;
    }
  
    try {
      await api.post("/usuarios", {
        nome,
        email,
        senha,
      });
  
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
  
      setNome("");
      setEmail("");
      setSenha("");
      setReSenha("");
      navigation.goBack();
    }catch (error) {
        console.error("Erro ao cadastrar:", error);
      
        // Verifica se há resposta do servidor
        if (error.response && error.response.data && error.response.data.error) {
          Alert.alert("Erro", error.response.data.error);
          console.error("Erro ao cadastrar:", error.response.data.error);
        } else {
          Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
          console.error("Erro ao cadastrar:", error.response.data.error);
        }
      }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuario</Text>
      <Text style={styles.label}>Nome do Usuário:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="xxx@xxx"
        keyboardType="email-address"
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
      <Text style={styles.label}>Re-Senha:</Text>
      <TextInput
        style={styles.input}
        value={reSenha}
        onChangeText={setReSenha}
        placeholder="Digite novamente a sua senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // cor de fundo leve
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
    backgroundColor: "#0056b3", // azul mais escuro
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
});

export default CadastroUsuario;