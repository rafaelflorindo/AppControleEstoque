import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import api from './api'

const Editar =({route, navigation})=>{
    const {id} = route.params;

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
    return(
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
                <Text style={styles.buttonText}>Alterar</Text>
              </TouchableOpacity>
            </View>
    )
}
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
export default Editar;
