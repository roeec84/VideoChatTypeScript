import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import {Server, Socket} from 'socket.io'
import SocketRoute from './routes/socket'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(cors())
app.use(bodyParser.json())

app.use('/socket', SocketRoute(io))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})