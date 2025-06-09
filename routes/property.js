const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Listar todos os imóveis
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('properties').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Buscar imóvel por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('properties').select('*').eq('id', id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// Cadastrar novo imóvel
router.post('/', async (req, res) => {
  const newProperty = req.body;
  const { data, error } = await supabase.from('properties').insert([newProperty]).select().single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// Atualizar imóvel
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const { data, error } = await supabase.from('properties').update(updates).eq('id', id).select().single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Deletar imóvel
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('properties').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Imóvel deletado com sucesso' });
});

module.exports = router;
