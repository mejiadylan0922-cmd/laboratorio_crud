const app= require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/starup/seedAdmin');

async function start() {
  await seedAdmin();

  app.listen(env.PORT, () => {
    console.log(`laboratorio API CRUD ejecutandose en http://localhost:${env.PORT}`);
  });
}

start();
