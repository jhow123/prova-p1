const ProductsRepository = require('../repositories/ProductsRepository');

class ProductController {
  async index(request, response) {
    try {
      const products = await ProductsRepository.findAll();
      response.json(products);
    } catch (error) {
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const product = await ProductsRepository.findById(id);
      if (!product) {
        return response.status(404).json({ error: 'Produto não encontrado' });
      }
      response.json(product);
    } catch (error) {
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async store(request, response) {
    try {
      const { name, price, category_id, subcategory } = request.body;
      if (!name) {
        return response.status(400).json({ error: 'Produto cadastrado sem nome' });
      }
      const product = await ProductsRepository.create({
        name,
        price,
        category_id,
        subcategory,
      });
      response.json(product);
    } catch (error) {
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, price, category_id, subcategory } = request.body;
      const productExists = await ProductsRepository.findById(id);
      if (!productExists) {
        return response.status(404).json({ error: 'Não existe produto com esse id cadastrado' });
      }
      if (!name) {
        return response.status(400).json({ error: 'Nome precisa ser preenchido ou válido' });
      }
      const product = await ProductsRepository.update(id, {
        name,
        price,
        category_id,
        subcategory,
      });
      response.json(product);
    } catch (error) {
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const product = await ProductsRepository.findById(id);
      if (!product) {
        return response.status(403).json({ error: 'Produto não encontrado' });
      }
      await ProductsRepository.delete(id);
      response.sendStatus(204);
    } catch (error) {
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = new ProductController();
