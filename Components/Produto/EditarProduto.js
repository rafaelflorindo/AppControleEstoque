import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../../services/api';

export default function EditarProduto({ route, navigation }) {
  const { id } = route.params; // Obtém o ID do produto passado via navegação
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await api.get(`/produtos/${id}`);
        const produto = response.data;
        setNome(produto.nome);
        setQuantidade(produto.quantidade.toString());
        setPreco(produto.preco.toString());
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do produto.');
      }
    }

    fetchProduto();
  }, []);

  async function Salvar() {
    try {
      await api.put(`/produtos/${id}`, {
        nome,
        quantidade: Number(quantidade),
        preco: Number(preco),
      });

      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      navigation.goBack(); // Retorna para a tela anterior (lista de produtos)
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      Alert.alert('Erro', 'Falha ao atualizar o produto.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produto</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Text>Preço:</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={Salvar} />
    </View>
  );
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
  },
});

