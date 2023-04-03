// Importando a biblioteca Express
const express = require('express');


// Criando uma instância do Express
const app = express();

// Importando as rotas
const routes = require('./routes');

// Definindo o uso do middleware para lidar com JSON
app.use(express.json());

// Definindo o uso das rotas importadas
app.use(routes);

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
