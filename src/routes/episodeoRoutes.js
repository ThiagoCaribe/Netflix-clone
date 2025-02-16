const express = require('express');
const router = express.Router();
const Episodeo = require('../models/episodio');

router.get('/temporada/:temporada', async (req, res) =>{
    try{
        const temporadaId  = req.params.temporada;
        const episodeos = await Episodeo.find({
            temporadaId,
        });
        res.json({erro: false, episodeos});
    }catch(err) {
        res.json({erro: true, message: err.message});
    }
})

module.exports = router;