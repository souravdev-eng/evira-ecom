'use strict';
const { connectToDatabase } = require('../../db/dbConnect');
const Product = require('../../models/productModel');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { arguments: args } = event;
  console.log('Data received in event', args);

  try {
    const { id } = args;

    await connectToDatabase();
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error(`Product is not found with provided id: ${id}`);
    }

    callback(null, 'Product deleted successfully ' + id);
  } catch (error) {
    console.log('Error: while trying to delete product by id from db \n', error);
    callback(null, error);
  }
};
