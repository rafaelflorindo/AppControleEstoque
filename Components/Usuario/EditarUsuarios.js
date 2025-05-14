import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../../services/api';

export default function EditarUsuario({ route, navigation }) {
  const { id } = route.params; // Obtém o ID do usuario passado via navegação
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [reSenha, setReSenha] = useState("");

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const response = await api.get(`/usuarios/${id}`);
        const usuario = response.data;
        setNome(usuario.nome);
        setEmail(usuario.email);
        setSenha(usuario.senha);
      } catch (error) {
        console.error('Erro ao buscar usuario:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuario.');
      }
    }

    fetchUsuario();
  }, []);

  async function Salvar() {
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
      await api.put(`/usuarios/${id}`, {
        nome,
        email,
        senha,
      });

      Alert.alert('Sucesso', 'usuario atualizado com sucesso!');
      navigation.goBack(); // Retorna para a tela anterior (lista de usuarios)
    } catch (error) {
      console.error('Erro ao atualizar usuario:', error);
      Alert.alert('Erro', 'Falha ao atualizar o usuario.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar usuario</Text>
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

