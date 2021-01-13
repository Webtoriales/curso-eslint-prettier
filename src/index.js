const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`App listening on port ${PORT}`);
  /* eslint-enable no-console */
});
