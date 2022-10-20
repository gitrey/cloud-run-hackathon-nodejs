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
    
//    const myPosition = arena.state['https://foo.com'];
    const myPosition = arena.state['https://a-a5fddfpbyq-uc.a.run.app'];
  
   console.log('arena.dims[0]', arena.dims[0]);
   console.log('arena.dims[1]', arena.dims[1]);
   console.log('myPosition', myPosition);
   
   for (var player in arena.state) {
       var p = arena.state[player];

    if (myPosition.x+1 == p.x &&
        myPosition.y+1 == p.y) {
            return  res.send('T');
    }

    if (myPosition.x-1 == p.x &&
        myPosition.y-1 == p.y) {
            return res.send('T');
    }

    if (myPosition.x == p.x &&
        myPosition.y-1 == p.y) {
            return res.send('T');
    }

    if (myPosition.x-1 == p.x &&
        myPosition.y == p.y) {
            return res.send('T');
    }

    if (myPosition.x == p.x &&
        myPosition.y == p.y) {
            return res.send('T');
    }
    console.log(arena.state[player]);
    console.log(arena.state[player].x);
    console.log(arena.state[player].y);
   }


   
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
