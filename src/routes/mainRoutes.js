
const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes')



router.get('/', async(req, res) =>{
    try{
        const filmes = await Filme.find({titulo: 'Avatar'}); // a chave dentro do find ajuda para filtra na busca 
        res.json({erro: false, filmes: filmes})
    }catch(err){
        res.json({erro: truem, menssage: err.message});
    }
});

router.get('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const filme =  await Filme.findById(id);
        res.json({error: false, filme});
    }catch(err){
        res.json({error: true, message: err.message });
    }
})
router.post('/', async (req, res) =>{
    try{
        const filme = req.body;
        const response = await new Filme(filme).save();
        res.json({erro: false, filme :response})
    }catch(err){
        res.json({erro: true, message: err.message})
    }
    
})

router.put('/:id', async (req, res) => {
    try{   
        const id = req.params.id
        const novoFilme = req.body;

        const filme = await Filme.findByIdAndUpdate(id,novoFilme);
        res.json({erro: false, filme})

    }catch(err){
        res.json({erro: true, menssage: err.message})
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const deleted  = await Filme.findOneAndDelete(id);
        res.json({erro: false});
    }catch(err){
        res.json({error: true,message: erro.massage })
    }
})

module.exports = router;