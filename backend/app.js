const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./auth');
const searchRoutes = require('./search');
const classRoutes = require('./classes');
const destinationsRoutes = require('./destinations');
const registerRoutes = require('./register');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/search', searchRoutes);
app.use('/classes', classRoutes);
app.use('/destinations', destinationsRoutes);
app.use('/register', registerRoutes);

module.exports = app;
