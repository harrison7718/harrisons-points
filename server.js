const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ${PORT}'));