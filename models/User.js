const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nome: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.ENUM('proprietario', 'intermediario', 'inquilino'), allowNull: false },
  bilhete_identidade: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  provincia: DataTypes.STRING,
  municipio: DataTypes.STRING,
  comuna: DataTypes.STRING,
  bairro: DataTypes.STRING
}, { timestamps: true });

module.exports = User;
