const express = require('express');                 //importa o express
const mongoose = require('mongoose');
const routes = require('./routes');                 //importa a variavel routs de rotas
const cors = require('cors');


const server = express();                           //cria o servidor

mongoose.connect('mongodb+srv://cassianobet:cassianobet@cluster0-cwa68.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());                         //express sabe que usa json
server.use(routes);                                

server.listen(3333);                                //servidor na porta 3333
