const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hola mundo en nodejs')
})

app.listen(5000);