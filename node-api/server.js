const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, Camilla!");
});

app.listen(3001);