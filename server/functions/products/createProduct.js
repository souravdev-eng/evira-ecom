'use strict';

const Product = require('../../models/productModel');
const { connectToDatabase } = require('../../db/dbConnect');
const { uploadImageToS3 } = require('../../services/imageUploader');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { arguments: args } = event;

  console.log('Data received in event', args);

  try {
    await connectToDatabase();

    const { productImage } = args.input;

    if (!productImage || !productImage.startsWith('data:image/')) {
      throw new Error('Invalid image data provided.');
    }

    const base64Data = productImage?.split(',')[1];
    const contentType = productImage?.split(';')[0].split(':')[1];

    const uploadedImageUrl = await uploadImageToS3(base64Data, contentType);

    args.input.productImage = uploadedImageUrl;

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
