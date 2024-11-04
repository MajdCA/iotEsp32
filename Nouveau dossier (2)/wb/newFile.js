const { wss } = require('./wb');

wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket server');

    // Handle WebSocket messages
    ws.on('message', (message) => {
        console.log(Received, $, { message });
        // Process the WebSocket message as needed
    });

    // You can also send messages to the client
    // ws.send('Hello from the server!');
});
