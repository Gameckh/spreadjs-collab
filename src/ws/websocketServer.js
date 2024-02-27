// websocketServer.js
const WebSocket = require('ws');
// const stateKeeper = require('../services/state-keeper');
const { executeCmd } = require('../spreadjs_playwright/executer');

function startServer(server) {
    const wss = new WebSocket.Server({ server });
    wss.on('connection', function connection(ws) {
        ws.isAlive = true;
        ws.on('pong', () => {
            ws.isAlive = true;
        });

        ws.on('message', async function incoming(message) {
            // Save the command from users.
            const cmd = message.toString('utf8');
            await executeCmd(cmd);
            // stateKeeper.saveCommand(cmd);
            // Broadcast message to all clients
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(cmd);
                }
            });
        });
    });

    // Heartbeat
    const interval = setInterval(function ping() {
        // 当没有活跃连接时，清空文档和命令
        if(wss.clients.length === 0){
            stateKeeper.clearCommands()
            stateKeeper.clearSnapshot()
        }
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false) return ws.terminate();
            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    wss.on('close', function close() {
        clearInterval(interval);
    });
}

module.exports = { startServer };
