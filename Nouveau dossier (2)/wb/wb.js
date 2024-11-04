const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
exports.wss = wss;

// Start your HTTP server
server.listen(3000, () => {
    console.log('HTTP server is running on port 3000');
});