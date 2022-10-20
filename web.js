const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(JSON.stringify(req.headers));
  //console.log(req.body);
  const moves = ['F', 'T', 'L', 'R'];
  
  const arena = JSON.parse(req.body);
  
  console.log('arena.dims[0]', arena.dims[0]);
  console.log('arena.dims[1]', arena.dims[1]);
  console.log("my state:", arena.state['https://a-a5fddfpbyq-uc.a.run.app']);
  
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
