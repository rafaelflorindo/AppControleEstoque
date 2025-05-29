import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import api from '../../api'

const Editar = ({ route, navigation }) => {
  const { id } = route.params;

  const [nome, setNome] = useState();
  const [quantidade, setQuantidade] = useState();
  const [preco, setPreco] = useState();

  const fetchProdutos = async () => {
    try {
      const response = await api.get(`/produtos/${id}`);
      const produto = response.data;

      setNome(produto.nome);
      setQuantidade(produto.quantidade.toString());
      setPreco(produto.preco.toString());
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };
  useEffect(() => {
    fetchProdutos();
  }, []);
  const handleSubmit = async () => {
    if (!nome || !preco || !quantidade) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    try {
      const response = await api.put(`/produtos/${id}`, {
        nome,
        preco: parseFloat(preco), // Convertendo para número
        quantidade: parseInt(quantidade, 10), // Convertendo para número inteiro
      });
      Alert.alert("Sucesso", "Produto Alterado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao alterar:", error);
      Alert.alert("Erro", "Não foi possível alterar o produto.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produto selecionado</Text>
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
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

    </View>
  )
}
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

  }, buttonCancel: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  }

});
export default Editar;
