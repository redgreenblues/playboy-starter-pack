const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
require('./db');
const MovieRouter = require('./routes/memesRouter');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routes
app.use('/app', MovieRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})