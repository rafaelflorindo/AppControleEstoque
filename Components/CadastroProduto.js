import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

import api from "../services/api"; // Arquivo com a configuração do Axios

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  
  const handleSubmit = async () => {
    if (!nome || !preco || !quantidade) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    try {
      await api.post("/produtos", {
        nome,
        preco: parseFloat(preco), // Convertendo para número
        quantidade: parseInt(quantidade, 10), // Convertendo para número inteiro
      });
      Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
      navigation.goBack();
      setNome("");
      setPreco("");
      setQuantidade("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Alert.alert("Erro", "Não foi possível cadastrar o produto.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Produto:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />
      <Text style={styles.label}>Preço:</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        placeholder="Digite o preço"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Digite a quantidade"
        keyboardType="numeric"
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
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default CadastroScreen;