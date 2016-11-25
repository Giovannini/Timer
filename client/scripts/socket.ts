import * as io from 'socket.io-client';

export const socket = io.connect('localhost:8080', { reconnection: true });
