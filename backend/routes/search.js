const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
    const { destinationId, query = '' } = req.body;

    const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const searchQuery = query.toLowerCase();

    let results;

    if (destinationId) {
        const destination = db.destinations.find(d => d.id === destinationId);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }

        results = db.hotels.filter(c =>
            c.city === destination.label &&
            (
                (typeof c.name === 'string' && c.name.toLowerCase().includes(searchQuery)) ||
                (typeof c.address === 'string' && c.address.toLowerCase().includes(searchQuery))
            )
        );
    } else {

        results = db.hotels.filter(c =>
            (typeof c.name === 'string' && c.name.toLowerCase().includes(searchQuery)) ||
            (typeof c.address === 'string' && c.address.toLowerCase().includes(searchQuery))
        );
    }

    res.json(results);
});

module.exports = router;
