const express = require('express');
const server = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT ?? 3300;

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home', 'page.html'));
});

server.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about', 'page.html'));
})

server.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'error', 'page.html'));
})

server.listen(PORT, () => console.log('Server listening on port', PORT));