const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImages: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  shippingInfo: {
    type: String,
    required: true,
  },
  productWeight: {
    type: Number,
    required: true,
  },
  productVariants: {
    type: [
      {
        size: String,
        color: String,
        style: String,
      },
    ],
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  seoSettings: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: ['draft', 'published', 'hidden'],
    default: 'draft',
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
