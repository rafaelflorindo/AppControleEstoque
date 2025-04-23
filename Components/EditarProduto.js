import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

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
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
