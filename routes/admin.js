const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
const authenticate = require('../middleware/authenticate');
const requireRole = require('../middleware/requireRole');

// Supabase com service role key
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ✅ Área protegida
router.get('/dashboard', authenticate, requireRole('admin'), (req, res) => {
  res.json({ message: `Bem-vindo ${req.user.email} à área administrativa` });
});

// ✅ Promover usuário para admin (somente por admin)
router.post('/promote', authenticate, requireRole('admin'), async (req, res) => {
  const { userId, role } = req.body;

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
    user_metadata: { role }
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: `Usuário promovido para ${role}`, data });
});

module.exports = router;
