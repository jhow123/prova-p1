const { v4 } = require('uuid');

class ProductsRepository {
  constructor() {
    this.products = [
      {
        id: v4(),
        name: 'Mana leak',
        price: '10,00',
        category_id: v4(),
        subcategory: 'card',
      },
      {
        id: v4(),
        name: 'Counterspell',
        price: '10,00',
        category_id: v4(),
        subcategory: 'card',
      },
    ];
  }

  findAll() {
    return Promise.resolve(this.products);
  }

  findById(id) {
    return Promise.resolve(this.products.find(product => product.id === id));
  }

  delete(id) {
    this.products = this.products.filter(product => product.id !== id);
    return Promise.resolve();
  }

  create({ name, price, category_id, subcategory }) {
    const newProduct = {
      id: v4(),
      name,
      price,
      category_id,
      subcategory,
    };
    this.products.push(newProduct);
    return Promise.resolve(newProduct);
  }

  update(id, { name, price, category_id, subcategory }) {
    const updatedProduct = {
      id,
      name,
      price,
      category_id,
      subcategory,
    };
    this.products = this.products.map(product => product.id === id ? updatedProduct : product);
    return Promise.resolve(updatedProduct);
  }
}

module.exports = new ProductsRepository();
