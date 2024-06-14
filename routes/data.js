const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    id: 1,
    name: 'Sample Data'
  };
  res.json(data);
});

router.post('/', (req, res) => {
  const newData = req.body;
  res.status(201).json(newData);
});

module.exports = router;
