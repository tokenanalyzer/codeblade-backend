const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const SUPABASE_URL = 'https://bwmcjffzhvqxjzxxxgwm.supabase.co';
const SUPABASE_KEY = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bWNqZmZ6aHZxeGp6eHh4Z3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MzA4MzEsImV4cCI6MjA5MTAwNjgzMX0.PlIpbPeG8y__i0yZ6Xjz0sLZMDbUL3yUqjKYBo3OjgY';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.post('/api/save-scan', async (req, res) => {
    const { address, status, score } = req.body;
    const { data, error } = await supabase
        .from('history')
        .insert([{ address, status, score }]);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.get('/api/history', async (req, res) => {
    const { data, error } = await supabase
        .from('history')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.get('/', (req, res) => res.send('Codeblade Server is Live!'));

app.listen(3000, () => console.log('Server running on port 3000'));
