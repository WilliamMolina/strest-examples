const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send({
    greeting: 'Hello '+req.query.name
  })
})

app.listen(3001)