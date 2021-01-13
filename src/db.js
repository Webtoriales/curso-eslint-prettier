const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@cluster0.9sstf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, options, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.log(`There was an error: ${err}`);
  } else {
    console.log('Database connected.');
  }
  /* eslint-enable no-console */
});
