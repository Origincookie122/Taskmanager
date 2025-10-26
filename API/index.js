const express = require('express');

const app = express();

app.get('/', async(req, res, next) => {
    res.json({message: 'Test'});
    return
});

app.listen(8080, async() => {
    
});