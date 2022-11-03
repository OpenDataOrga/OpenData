




const PORT = process.env.PORT || 3000;

app.get('/', function(req, response){
	console.log('hello');
	response.send('bienvenue sur mon serveur');
})



app.listen(PORT, function(){
	console.log('Hello :'+ PORT);
})

