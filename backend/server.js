const app= require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/startup/seedAdmin');

async function start() {
  await seedAdmin();

  app.listen(env.port, () => {
    console.log(`laboratorio API CRUD ejecutandose en http://localhost:${env.port}`);
  });
}

start();
