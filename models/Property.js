const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  tipo: DataTypes.STRING,
  modalidade: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  provincia: DataTypes.STRING,
  municipio: DataTypes.STRING,
  bairro: DataTypes.STRING,
  preco: DataTypes.DECIMAL,
  fotos: DataTypes.JSONB,
  documentos: DataTypes.JSONB
}, { timestamps: true });

Property.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Property;
