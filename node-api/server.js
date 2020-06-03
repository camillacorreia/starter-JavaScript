const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/node-api', { useNewUrlParser:true });

// Primeira rota
app.get('/', (req, res) => {
    res.send("Hello, Camilla!");
});

app.listen(3001);