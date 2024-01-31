import express from 'express';
import cors from 'cors';

const port: number = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    console.log(`recebi sua requisição`)
    res.json({mensagem:`Hello world!`})
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})