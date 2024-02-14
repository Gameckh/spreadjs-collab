const express = require('express');
const http = require('http');
const { startServer } = require('./src/ws/websocketServer');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use('/spreadjs', require('./src/routes/spreadjs'));

startServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
