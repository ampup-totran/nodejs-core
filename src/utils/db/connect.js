import mongoose from 'mongoose';

import { printLogConsole } from '../logging';

function connectMongoDB() {
  const { MONGO_URL } = process.env;
  mongoose.connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(
      () => printLogConsole('Database is Connected!'),
      () => printLogConsole('Can\'t connect to the Database')
    );
}

module.exports = {
  connectMongoDB
};