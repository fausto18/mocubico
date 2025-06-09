const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Property = require('./Property');
const User = require('./User');

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  data_inicio: DataTypes.DATEONLY,
  data_fim: DataTypes.DATEONLY,
  valor_final: DataTypes.DECIMAL,
  status: DataTypes.STRING
}, { timestamps: true });

Contract.belongsTo(Property, { foreignKey: 'property_id' });
Contract.belongsTo(User, { foreignKey: 'inquilino_id' });

module.exports = Contract;
