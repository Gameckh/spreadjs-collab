const express = require('express');
const http = require('http');
const { startServer } = require('./src/ws/websocketServer');
const { initSpreadJS } = require('./src/spreadjs/initSpread');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.static('public'));
app.use('/spreadjs', require('./src/routes/spreadjs'));

startServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await initSpreadJS();
  console.log('完成 SpreadJS 初始化');
});
