// dépendance api express
let express = require('express');

const app = express();

let bodyParser = require("body-parser");

var PORT = 3000;

// serveur html
app.listen(PORT, function(){
  console.log('Hello : '+ PORT);
})

/* app.use(express.json()); */

app.use(bodyParser.urlencoded({ extended: true }));

//méthode get qui affiche le formulaire
app.get('/note', function(request, response) {
  response.sendFile( __dirname  + '/post_note.html');
});

//le formulaire pointe en sortie vers la méthode post ci-après, permettant de récupérer la note saisie
app.post('/post', function(request, response) {
  const body = request.body;
  let note = body.rg1; //string type

  /* fonction Théo */

  console.log("note = " + note);
});
