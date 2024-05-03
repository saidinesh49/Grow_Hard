const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const games = {};
const generateCode = () => Math.random().toString(36).substring(2, 9);

wss.on('connection', ws => {
    ws.on('message', message => {
        const { type, gameId, payload } = JSON.parse(message);
        
        switch (type) {
            case 'create':
                const gameCode = generateCode();
                games[gameCode] = { players: [ws], gameData: {} };
                ws.send(JSON.stringify({ type: 'gameCreated', gameCode }));
                break;
            case 'join':
                if (games[gameId]) {
                    games[gameId].players.push(ws);
                    games[gameId].players.forEach(player => {
                        player.send(JSON.stringify({ type: 'startGame', gameId }));
                    });
                } else {
                    ws.send(JSON.stringify({ type: 'error', message: 'Game not found.' }));
                }
                break;
            case 'move':
                if (games[gameId]) {
                    games[gameId].players.forEach(player => {
                        if (player !== ws) {
                            player.send(JSON.stringify({ type: 'move', payload }));
                        }
                    });
                }
                break;
        }
    });
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
