import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

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

server.post('/habitat', (req, res)=>{
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado')
})

server.post('/atracao', (req, res)=>{
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criado')
})

server.post('/zoologico', (req, res)=>{
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado')
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço  http://localhost:${port}`);
});