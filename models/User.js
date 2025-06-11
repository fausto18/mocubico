const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nome: { type: DataTypes.STRING, allowNull: false },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['proprietario', 'intermediario', 'inquilino']]
    }
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'inquilino', // ou 'proprietario'
    validate: {
      isIn: [['admin', 'proprietario', 'intermediario', 'inquilino']]
    }
  },
  bilhete_identidade: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  provincia: DataTypes.STRING,
  municipio: DataTypes.STRING,
  comuna: DataTypes.STRING,
  bairro: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
