const express = require('express');
const pseudoDB = require('./database/pseudoDB');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/food', (req, res) => {
  res.status(200).json(pseudoDB.getFoods());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
