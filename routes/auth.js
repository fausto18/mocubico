const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json({ message: 'Usuário registrado com sucesso', data });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ error: error.message });
  res.status(200).json({ message: 'Login efetuado com sucesso', session: data });
});

// Nota: Logout via Supabase SDK só funciona no frontend.
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout deve ser feito no frontend limpando o token' });
});

module.exports = router;
