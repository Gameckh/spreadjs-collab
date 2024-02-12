const express = require('express');
const http = require('http');
const { startServer } = require('./websocketServer');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

startServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
