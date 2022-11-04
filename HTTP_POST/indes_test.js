// dépendance api express
let express = require('express');

const app = express();

let bodyParser = require("body-parser");

var PORT = 3002;

// serveur html
app.listen(PORT, function(){
  console.log('Hello :'+ PORT);
})

/* app.use(express.json()); */

app.use(bodyParser.urlencoded({ extended: true }));






app.get('/form', function(request, response) {
  response.sendFile( __dirname  + '/form.html');
  /* response.send('ça marche pas') */
});

app.post('/post', function(request, response) {
  let p1 = request.body.p1;
  console.log("p1=" + p1);
  /* console.log(request.body);
  response.status(201).json({
    message: 'Objet trouvé'
  }); */
});




// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
