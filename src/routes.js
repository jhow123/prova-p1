// Importando o Router do Express
const { Router } = require('express');

// Importando o controller de produtos
const ProductController = require('./app/controllers/ProductController');

// Criando uma instância do Router
const router = Router();

// Definindo as rotas da API de produtos
router.get('/produtos', ProductController.index);
router.get('/produtos/:id', ProductController.show);
router.delete('/produtos/:id', ProductController.delete);
router.post('/produtos', ProductController.store);
router.put('/produtos/:id', ProductController.update);

// Exportando o Router
module.exports = router;
