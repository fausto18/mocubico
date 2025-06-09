const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Rotas organizadas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/property'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
