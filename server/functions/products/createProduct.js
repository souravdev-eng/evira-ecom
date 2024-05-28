'use strict';
const mongoose = require('mongoose');
const { connectToDatabase } = require('../../db/dbConnect');
const Product = require('../../models/productModel');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { arguments: args } = event;

  console.log('Data received in event', JSON.stringify(args.input));

  try {
    await connectToDatabase();
    const product = new Product(args.input);
    const savedProduct = await product.save();

    console.log('Product saved successfully:', savedProduct);

    callback(null, savedProduct);
  } catch (error) {
    console.error('Error saving product:', error.message);
    console.log(error);
    callback(null, error);
  }
};
