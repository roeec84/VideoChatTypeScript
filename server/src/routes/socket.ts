import express, { Request, Response, Router } from 'express'
import { Server, Socket } from 'socket.io'

export default function SocketRoute(io: Server): Router {
    const router = express.Router()
    io.on('connection', (socket: Socket) => {
        socket.emit('me', socket.id)
        socket.on('disconnect', () => {
            console.log(`${socket.id} has disconnected.`);
        })
        socket.on('user-clicked', (data) => {
            console.log(`User say: ${data.message}`)
        })
    })
    return router;
}
