import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const port: number = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Cachorro', 102, 'Femea', 'Doberman')
    res.json([ave, reptil, mamifero]);
    //res.send("Estou devolvendo a resposta para sua requisição");
});

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é ", ave]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço  http://localhost:${port}`);
});