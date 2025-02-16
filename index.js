//backEnd, primeiro é criado um servidor  usando express
// O professor recomenda usar o yarn para instalações dos pacotes


const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const database = require('../Ws/src/services/database');
const bodyParser = require('body-parser');
const routes  = require('./src/routes/mainRoutes');
const usuarioRoutes = require('../Ws/src/routes/usuariosRoutes');
const filmes = require('../Ws/src/routes/filmesRoutes');
const Episodeos = require('../Ws/src/routes/episodeoRoutes');
// Midlewares
app.use(bodyParser.json());
app.use(cors());;
app.use(morgan('dev')); // estamos trabalhando em um servido dev
app.use(express.json());

// Routes 
app.use('/usuario', usuarioRoutes)

app.listen(3000, () =>{
    console.log('meu servidor está funcionando');
});

app.use('/', routes);

app.use('/filmes', filmes)
app.use('episodeo',  Episodeos)

// Rotas

/*
    Conceito CRUD: create, read, update, delete é meio que o arroz com feijão
*/
// mongoosse ajuda para trabalhar com JS no mongoDb
