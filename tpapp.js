'use strict';
/* Author: Johnny Tsheke @ Programmation web -- UQAM
 * Cette petite application node.js sert a démarrer un serveur web  pour
 * interagir avec les pages web (html, css, js, etc) dans le cadre des TP 
 *
 */
var express = require('express');
var app=express();
var bodyParser = require('body-parser');// pour les formulaires avec method post
// si ca ne marche pas installez express et body-parser avec la commade suivante:
// npm install express body-parser --save
// npm install cookie-parser fs http cors --save
var cParser = require('cookie-parser');
var fs = require('fs');
var http = require('http');
var cors = require('cors');



//remplacez la valeur de htdocs par le chemin du dossier contenant 
//vos fichiers html

//var htdocs= __dirname+'public_html';//pour chemin absolu ATT au commutateur: 
 var htdocs='public_html';
console.log(htdocs);
//app.use(express.static(__dirname +'public_html'));
app.use(express.static(htdocs));
var appdefault='appdefault';
console.log(appdefault);
app.use(express.static(appdefault)) // charger après htdocs pour donner priorité aux pages de l'utilisateur
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cParser());
app.use(cors());

//ajout quelques routes de test
//connect
app.get('/appconnect', function(reg,res){
	
	var text='<h3 style="color:red;">Utilisez la methode post pour la connexion</h3>';
	text=text+'<br/><a href="index.html">Retour à la page d\'acceuil</a>';
	res.send(text);
});

app.post('/appconnect', function (req, res) {
	
	var text='<h3 style="color:blue;">Connecté(e) !</h3>';
	text=text+'<br/><a href="index.html">Retour à la page d\'acceuil</a>';
	res.send(text);
	});

//contacts

app.get('/appcontacts', function(reg,res){
	
	var text='<h3 style="color:red;">Utilisez la methode post pour le formulaire  contacts</h3>';
	text=text+'<br/><a href="index.html">Retour à la page d\'acceuil</a>';
	res.send(text);
});

app.post('/appcontacts', function (req, res) {
	
	var text='<h3 style="color:blue;">Merci. Nous avons reçu votre demande de contact </h3>';
	text=text+'<br/><a href="index.html">Retour à la page d\'acceuil</a>';
	res.send(text);
	});
//get saved json
app.get('/getjson', function (req, res) {
	//console.log(res.query);
	let msg = {};
	let datadir = __dirname + '/';
	if (typeof req.query.f === 'undefined') {
		msg={ 'error': '?f=NomFichierJson' };
	} else {
		let datafile = datadir + req.query.f;
		let rawdata = fs.readFileSync(datafile);
         msg = JSON.parse(rawdata);
	}
	res.json(msg);
});
//save json content into a fiel
app.post('/postjson', function (req, res) {
	let datadir = __dirname + '/';
	var jsonData = req.body;
	var data = jsonData.data;
	let datafile = datadir + jsonData.file;
	console.log("data: " + jsonData.data);
	console.log("filename: " + jsonData.file);
	//res.json(jsonData);
    fs.writeFile(datafile, data , function(err) {
      if (err) {
         res.status(500).jsonp({ error: 'Non enregistré' });
      }
		res.json({ status: "Enregistré avec succès" });
    });
});

// fin routes
var portNumber=3000;// au besoin changez le numero de port
app.listen(portNumber,function(){console.log(' le serveur fonctionne sur le port: '+portNumber)});
console.log('serveur demarré avec success');
//pour executer, tapez la commade suivante:
//node tpapps.js
//Avec un navigateur web, visitez le site http://localhost:3000
//Au besoin remplacez 3000 par le numero de port utilisé dans la variable portNumber
