const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
    const {
        destinationId,
        query = '',
        page = 1,
        limit = 6
    } = req.body;

    try {
        const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const searchQuery = query.toLowerCase();

        let filteredHotels;

        if (destinationId) {
            const destination = db.destinations.find(d => d.id === destinationId);
            if (!destination) {
                return res.status(404).json({ message: 'Destination not found' });
            }

            filteredHotels = db.hotels.filter(c =>
                c.city === destination.label &&
                (
                    (typeof c.name === 'string' && c.name.toLowerCase().includes(searchQuery)) ||
                    (typeof c.address === 'string' && c.address.toLowerCase().includes(searchQuery))
                )
            );
        } else {
            filteredHotels = db.hotels.filter(c =>
                (typeof c.name === 'string' && c.name.toLowerCase().includes(searchQuery)) ||
                (typeof c.address === 'string' && c.address.toLowerCase().includes(searchQuery))
            );
        }

        const totalCount = filteredHotels.length;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedResults = filteredHotels.slice(startIndex, endIndex);

        res.json({
            hotels: paginatedResults,
            totalCount: totalCount
        });

    } catch (error) {
        console.error('Error processing search request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
