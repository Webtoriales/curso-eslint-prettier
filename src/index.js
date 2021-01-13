const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


try {
  // ejecucion de codigo que casi nunca falla
} catch (error) {
  jump();
}