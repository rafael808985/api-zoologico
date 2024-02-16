// Importa o framework Express para criar o servidor
import express from 'express';
// Importa o módulo 'cors' para lidar com requisições de diferentes origens
import cors from 'cors';
// Importa as classes de modelo para Ave, Mamifero, Reptil, Habitat, Atracao e Zoologico
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

// Define a porta em que o servidor irá escutar
const port: number = 3000;

// Inicializa o servidor Express
const server = express();

// Utiliza middlewares para fazer o parsing do corpo das requisições como JSON e habilitar o CORS
server.use(express.json());
server.use(cors());

// Rota principal que retorna uma lista de objetos Ave, Reptil e Mamifero
server.get('/', (req, res) => {
    let ave: Ave = new Ave('papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Cachorro', 102, 'Femea', 'Doberman')
    res.json([ave, reptil, mamifero]);
    //res.send("Estou devolvendo a resposta para sua requisição");
});

// Rota para criar uma nova Ave
server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é ", ave]);
})

// Rota para criar um novo Habitat
server.post('/habitat', (req, res)=>{
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado')
})

// Rota para criar uma nova Atração
server.post('/atracao', (req, res)=>{
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criado')
})

// Rota para criar um novo Zoologico
server.post('/zoologico', (req, res)=>{
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado')
})

// Inicia o servidor na porta especificada e exibe uma mensagem no console
server.listen(port, () => {
    console.log(`Servidor está escutando no endereço  http://localhost:${port}`);
});
