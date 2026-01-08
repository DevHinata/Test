const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Needs 'node-fetch' installed
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve the current folder

app.post('/chat', async (req, res) => {
  try {
    // Forward request to Render
    const response = await fetch('https://hybrid-ani.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reach Ani' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
