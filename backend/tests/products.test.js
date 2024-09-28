const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRouter = require('../routes/products');
const Product = require('../models/product');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/products', productsRouter);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Products API', () => {
  let productId;

  test('POST /api/products - create a new product', async () => {
    const newProduct = {
      productTitle: 'Test Product',
      productDescription: 'Test Description',
      productImages: ['image1.jpg', 'image2.jpg'],
      category: 'strategy',
      price: 10,
      stockQuantity: 5,
      sku: 'TESTSKU',
      shippingInfo: 'Test Shipping Info',
      productWeight: 1,
      productVariants: [{ size: 'M', color: 'Red', style: 'Casual' }],
      tags: 'test,product',
      seoSettings: 'Test SEO',
      visibility: 'draft',
    };

    const response = await request(app)
      .post('/api/products')
      .send(newProduct)
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    productId = response.body._id;
  });

  test('GET /api/products - get all products', async () => {
    const response = await request(app)
      .get('/api/products')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /api/products/:id - get product by id', async () => {
    const response = await request(app)
      .get(`/api/products/${productId}`)
      .expect(200);

    expect(response.body).toHaveProperty('_id', productId);
  });

  test('PUT /api/products/:id - update product by id', async () => {
    const updatedProduct = {
      productTitle: 'Updated Product',
      productDescription: 'Updated Description',
      productImages: ['image1.jpg', 'image2.jpg'],
      category: 'strategy',
      price: 15,
      stockQuantity: 10,
      sku: 'UPDATEDSKU',
      shippingInfo: 'Updated Shipping Info',
      productWeight: 2,
      productVariants: [{ size: 'L', color: 'Blue', style: 'Formal' }],
      tags: 'updated,product',
      seoSettings: 'Updated SEO',
      visibility: 'published',
    };

    const response = await request(app)
      .put(`/api/products/${productId}`)
      .send(updatedProduct)
      .expect(200);

    expect(response.body).toHaveProperty('productTitle', 'Updated Product');
  });

  test('DELETE /api/products/:id - delete product by id', async () => {
    await request(app)
      .delete(`/api/products/${productId}`)
      .expect(200);

    const response = await request(app)
      .get(`/api/products/${productId}`)
      .expect(404);

    expect(response.body).toHaveProperty('message', 'Product not found');
  });
});
