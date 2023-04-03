// Importando a biblioteca Express
import express from 'express';

// Criando uma instância do Express
const app = express();

// Importando as rotas
import routes from './routes';

// Definindo o uso do middleware para lidar com JSON
app.use(express.json());

// Definindo o uso das rotas importadas
app.use(routes);

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
