const database = require('../services/database');
const Usuario  = require('../models/usuario');
const usuarios = require('../data/usuario.json');
const addUsers = async () =>{
    try{
        for(let usuario of usuarios){
            console.log(`inserindo ${usuario.nome}`);
            await new Usuario(usuario).save();
        }
        console.log('final de escript');
    }catch(err){
        console.log(err.message);
    }
}

addUsers();