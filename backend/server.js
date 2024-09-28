const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRouter = require('./routes/products');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/products', productsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
