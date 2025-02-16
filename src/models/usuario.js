const mongoose = require('mongoose');

const Usario = mongoose.model( 'Usuario', { 
   nome: String,
   email: String,
   senha: String

});

module.exports = Usario;