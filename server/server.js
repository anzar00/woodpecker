const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Woodpecker API is running...');
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server healthy'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});