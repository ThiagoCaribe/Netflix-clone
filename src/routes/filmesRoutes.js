const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes');
const _ = require('underscore');

const  Temporada = require('../models/temporada');

// Recuperar Filmes

router.get('/home', async (req, res) => {
    try{
        let filmes =  await Filme.find({});
        let finalFilmes = [];
        for(let filme of filmes){
            const temporadas = await  Temporada.find({
                filme_id : filme._id
            });

            const novoFilme = {...filme._doc, temporadas};

            finalFilmes.push(novoFilme);
        }
        
            // Misturar resultado

            finalFilmes  = _.shuffle(finalFilmes);

            // filme principal 

            const principal  = finalFilmes[0];

            // separando por secção
            const secoes = _.chunk(finalFilmes,5);
        res.json({erro: false, principal, secoes})
    }catch(err){
        res.json({ erro: true, message: err.message});
    }
})

module.exports = router;