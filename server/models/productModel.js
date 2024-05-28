const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  productImage: {
    type: String,
    required: true,
  },
  imageList: [
    {
      type: String,
    },
  ],
  originalPrice: {
    type: Number,
    required: true,
    min: [50, 'Price should at least start from 50 rupees'],
    max: [1000000, 'Price should not be greater than 1000000 rupees'],
  },
  discountPrice: {
    type: Number,
    validate: {
      validator: function (value) {
        return value <= this.originalPrice;
      },
      message: 'Discount price ({VALUE}) should not be greater than the original price',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
