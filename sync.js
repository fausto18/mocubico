require('dotenv').config();
const sequelize = require('./config/database');
const User = require('./models/User');
const Property = require('./models/Property');

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso');

    await sequelize.sync({ alter: true }); // ou force: true para recriar tudo
    console.log('Tabelas sincronizadas');

    process.exit(0);
  } catch (err) {
    console.error('Erro:', err);
    process.exit(1);
  }
}

syncModels();
