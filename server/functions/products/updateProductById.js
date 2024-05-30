'use strict';
const { connectToDatabase } = require('../../db/dbConnect');
const Product = require('../../models/productModel');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { arguments: args } = event;
  console.log('Data received in event', args);

  try {
    const {
      id,
      name,
      description,
      productImage,
      imageList,
      originalPrice,
      discountPrice,
      createdAt,
      updatedAt,
    } = args.input;

    await connectToDatabase();
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        productImage,
        imageList,
        originalPrice,
        discountPrice,
        createdAt,
        updatedAt,
      },
      { runValidators: true, new: true }
    );

    if (!product) {
      throw new Error(`Product is not found with provided id: ${id}`);
    }

    callback(null, 'Product updated successfully ' + id);
  } catch (error) {
    console.log('Error: while trying to update product by id from db \n', error);
    callback(null, error);
  }
};
