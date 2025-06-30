const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'postgres',
  database: process.env.DB_NAME || 'dockerapp',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

app.get('/', (req, res) => {
  res.json({ message: 'Docker Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});