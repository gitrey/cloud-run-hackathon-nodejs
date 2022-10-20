const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body.arena);
  const moves = ['F', 'T', 'L', 'R'];
  
    const arena = req.body.arena;
    const myPosition = arena.state['https://foo.com'];
  
   console.log('arena.dims[0]', arena.dims[0]);
   console.log('arena.dims[1]', arena.dims[1]);
   console.log('myPosition', myPosition);
   for (var player in arena.state) {
    console.log(arena.state[player].x);
    console.log(arena.state[player].y);
   }
   console.log("my state:", arena.state['https://foo.com']);


   
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
