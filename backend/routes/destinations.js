const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  try {
    const dbPath = path.resolve(__dirname, '../db.json');
    const data = fs.readFileSync(dbPath, 'utf-8');
    const db = JSON.parse(data);

    if (!db.destinations) {
      return res.status(500).json({ error: 'destinations not found in db.json' });
    }

    res.json(db.destinations);
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to load destinations' });
  }
});

module.exports = router;
