const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//  CORS deve vir antes das rotas
app.use(cors({
  origin: 'http://localhost:3000', // Substitua pelo seu domínio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Permitir cookies e credenciais
}));

app.use(express.json());

// Suas rotas
const uploadRoutes = require('./routes/upload');
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/property'));
app.use('/api/users', require('./routes/User'));
app.use('/api/upload', uploadRoutes);
app.use('/api/admin', require('./routes/admin'));

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
