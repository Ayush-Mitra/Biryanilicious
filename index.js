import 'dotenv/config';
import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Example: Get all menu items
app.get('/api/menu', async (req, res) => {
  const { data, error } = await supabase.from('menu').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Example: Get all services
app.get('/api/services', async (req, res) => {
  const { data, error } = await supabase.from('services').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Example: Get trending items
app.get('/api/trending', async (req, res) => {
  const { data, error } = await supabase.from('trending').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Example: Place an order
app.post('/api/orders', async (req, res) => {
  const order = req.body;
  const { data, error } = await supabase.from('orders').insert([order]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
});

// Example: Get all orders (admin)
app.get('/api/orders', async (req, res) => {
  const { data, error } = await supabase.from('orders').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
}); 