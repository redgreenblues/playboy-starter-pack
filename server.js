// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');

// Environment Variables
const PORT = process.env.PORT || 3000;

// Imports
require('./db');
const { MemesRouter, GifsRouter, PunsRouter } = require('./routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/app', MemesRouter, GifsRouter, PunsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})