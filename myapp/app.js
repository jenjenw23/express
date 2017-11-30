const express = require('express')
const app = express()


var Heroes = [
    {"id":"1", "name":"Bob"},
    {"id":"2", "name":"Robert"},
    {"id":"3","name":"Bobby"}
  ]

 app.get('/api/heroes', function(req, res) {
  res.send(Heroes);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))