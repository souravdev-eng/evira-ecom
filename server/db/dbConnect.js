const mongoose = require('mongoose');
let isConnected;

const connectToDatabase = async () => {
  try {
    if (isConnected) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = mongoose.connection.readyState;
    console.log('Mongo is connected successfully');
  } catch (error) {
    console.error('Error: Data base not abele to connect successfully');
    console.log(error);
  }
};

module.exports = { connectToDatabase };
