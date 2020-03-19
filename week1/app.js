'use strict';
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/catinfo', (req, res) => {
    const cat = {
      'name': 'Karvinen',
      'age': 35,
      'weight': 999,
    };
    res.json(cat);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))