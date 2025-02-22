const mongoose = require('mongoose');

const Episodeo = mongoose.model( 'Episodeo', { 
    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref:'Filme'
    },
    titulo: String,
    descricao: String,
    numero: Number,
    capa: String
});

module.exports = Episodeo;