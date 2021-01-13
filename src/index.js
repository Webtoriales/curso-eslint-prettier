const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`App listening on port ${PORT}`);
  /* eslint-enable no-console */
});


try {
  // ejecucion de codigo que casi nunca falla
} catch (error) {
  jump();
}

console.log(`App listening on port ${PORT}`);