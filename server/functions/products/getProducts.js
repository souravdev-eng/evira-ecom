'use strict';

const { connectToDatabase } = require('../../db/dbConnect');
const Product = require('../../models/productModel');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    console.log(JSON.stringify(event));
    await connectToDatabase();
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.log('Error: while trying to fetch all product from db', error);
    return error;
  }
};
