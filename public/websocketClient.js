// websocketClient.js
function WebSocketClient(url) {
    let ws = new WebSocket(url);
    let reconnectInterval = 1000; // Start with a 1-second delay

    const connect = () => {
        ws = new WebSocket(url);

        ws.onopen = () => {
            console.log('WebSocket connection established');
            reconnectInterval = 1000; // Reset reconnect interval on successful connection
        };

        ws.onclose = (e) => {
            console.log('Socket is closed. Reconnect will be attempted in ' + reconnectInterval + ' milliseconds.', e.reason);
            setTimeout(connect, reconnectInterval);
            reconnectInterval *= 2; // Use exponential backoff
        };

        ws.onerror = (err) => {
            console.error('Socket encountered error: ', err.message, 'Closing socket');
            ws.close();
        };
    };

    connect(); // Initialize the connection

    // Public API for sending messages
    this.sendMessage = (message) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(message);
        } else {
            console.log('WebSocket is not open.');
        }
    };

    // Setting up a message listener
    this.onMessage = (callback) => {
        ws.onmessage = callback;
    };
}

export default WebSocketClient;
