# 📦 App Controle Estoque

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![React Native](https://img.shields.io/badge/React%20Native-v0.73.0-blue?logo=react)](https://reactnative.dev/)  
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://github.com/rafaelflorindo/ControleEstoque)  
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()  
[![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey)]()  

Aplicativo mobile desenvolvido em **React Native** junto com alunos do curso de Análise e Desenvolvimento de Sistemas da Faculdade SENAC, utilizando Node.js.para controle de estoque de produtos, utilizando uma API REST com **Node.js** e **SQLite**.

> 🔗 Este app consome a API do repositório: [**ControleEstoque (backend)**](https://github.com/rafaelflorindo/ControleEstoque)

---

## 🚀 Objetivo

O principal objetivo deste aplicativo é permitir o **gerenciamento prático e rápido de estoque**, possibilitando ao usuário:

- Cadastrar novos produtos
- Visualizar a lista de produtos disponíveis
- Editar informações dos produtos
- Excluir produtos

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Node.js (backend)](https://github.com/rafaelflorindo/ControleEstoque)
- [SQLite (no backend)](https://www.sqlite.org/index.html)
- Axios para requisições HTTP

## 📱 Funcionalidades já implementadas

- 📋 Tela de listagem de produtos
- ➕ Cadastro de novos produtos
- ✏️ Edição de produtos existentes
- ❌ Exclusão de produtos
- 🔄 Comunicação com API RESTful

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente
- Backend rodando localmente ([acesse aqui o repositório da API](https://github.com/rafaelflorindo/ControleEstoque))

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/rafaelflorindo/AppControleEstoque
   cd AppControleEstoque
Instale as dependências:

```bash
npm install
```
Inicie o app com o Expo:

```bash
npx expo start
```
⚠️ Importante: certifique-se de que o backend esteja rodando e que o IP utilizado no arquivo api.js aponte corretamente para o seu servidor local.

📂 Estrutura do Projeto
pgsql
Copiar
Editar
```AppControleEstoque/
├── screens/
│   ├── Home.js
│   ├── CadastroScreen.js
│   └── Editar.js
├── api.js
├── App.js
├── app.json
└── package.json
📌 Status
🚧 Em desenvolvimento
```
🤝 Contribuições
Contribuições são bem-vindas! Fique à vontade para abrir issues ou enviar pull requests.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
