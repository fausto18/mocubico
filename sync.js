const sequelize = require('./config/database');
const User = require('./models/User');
const Property = require('./models/Property');
const Contract = require('./models/Contract');

require('dotenv').config();

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');

    await sequelize.sync({ alter: true }); // ou { force: true } para resetar
    console.log('Tabelas sincronizadas com sucesso.');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
    process.exit(1);
  }
}

syncModels();
