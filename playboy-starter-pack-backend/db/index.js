const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'playboyStarter'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
.once('open', () => {
    console.log('Connected to Mongo: ' + MONGODB_URI);
}).on('error', err => {
    console.log(err.message + ' is Mongo not running?')
})