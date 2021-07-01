const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ data: [
    {
      id: 1,
      name: 'Matt'
    },
    {
      id: 2,
      name: 'Fisher'
    }
  ]});
});

const port = process.env.PORT | "3001";

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});