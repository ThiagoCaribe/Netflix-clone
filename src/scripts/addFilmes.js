const database = require('../services/database');
const Filmes  = require('../models/filmes');
const filmes = require('../data/filme.json');
const addFilmes = async () =>{
    try{
        for(let filme of filmes){
            console.log(`inserindo ${filme.titulo}`);
            await new Filmes(filme).save();
        }
        console.log('final de escript');
    }catch(err){
        console.log(err.message);
    }
}

addFilmes();