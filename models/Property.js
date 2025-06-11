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
  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('preco');
      return new Intl.NumberFormat('pt-AO', {
        style: 'decimal',
        minimumFractionDigits: 2
      }).format(rawValue);
    }
  },
  fotos: DataTypes.JSONB,
  documentos: DataTypes.JSONB,
  fotos_info: DataTypes.JSONB 
}, {
  tableName: 'properties',
  timestamps: true
});

Property.belongsTo(User, { foreignKey: 'proprietario_id', as: 'proprietario' });

module.exports = Property;
