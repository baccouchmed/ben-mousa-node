const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1/mousa';

const setupMongoServer = async () => {
  try {
    mongoose.set('strictPopulate', false);

    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.info('Database connected successfully !!');
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = setupMongoServer;
