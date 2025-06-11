const express = require('express');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload de foto/documento
router.post('/', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'Nenhum arquivo enviado' });

  const filePath = `${Date.now()}-${file.originalname}`;
  const { data, error } = await supabase.storage
    .from('imoveis')
    .upload(filePath, file.buffer, {
      contentType: file.mimetype
    });

  if (error) return res.status(500).json({ error: error.message });

  const publicUrl = supabase.storage.from('imoveis').getPublicUrl(filePath).data.publicUrl;
  res.status(200).json({ message: 'Upload bem-sucedido', url: publicUrl });
});

module.exports = router;