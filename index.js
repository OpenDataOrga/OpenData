

const axios = require('axios')
const express = require('express')
const request = require('request')
const fs = require('fs')
const XLSX = require('xlsx');
const puppeteer = require('puppeteer')


const PORT = process.env.PORT || 3000

const app = express()

app.get('/', function(req, response){
	console.log('hello')
	response.send('bienvenue sur mon serveur')
})



app.listen(PORT, function(){
	console.log('Hello :'+ PORT)
})

