//Adicionando o módulo express - retorna uma funcão com todos os contextos:
// const express = require('express');

//Aqui temos uma aplicação em express, de fato. Teremos todos os métodos e infraestrutura do express.
const app = require('./src/config/local-express');

app.listen(3000, 'localhost',  function(){
	console.log('Porta 3000 aberta e ouvindo!');
});





// //Acionando o módulo http:
// const http = require('http');

// //Criando um servidor http
// const servidor = http.createServer(function(req, resp){

// 	let html = '';

// 	if(req.url == '/'){
// 		html = `<html>
// 			<head>
// 				<meta charset="UTF-8">
// 			</head>
// 			<body>
// 				<h1>Página inicial</h1>
// 			</body>		
// 		</html>` 
// 	} else if (req.url == '/livros'){
// 		html = `<html>
// 			<head>
// 				<meta charset="UTF-8">
// 			</head>
// 			<body>
// 				<h1>Módulo de livros!</h1>
// 			</body>		
// 		</html>`
// 	}

// 	resp.end(html);
// });

// servidor.listen(3000, 'localhost');

//Transformando um projeto em projeto node - npm init.
//Baixando o express informando ao npm a versão e que ele é importante e deve ser baixado exatamente - npm install express@4.16.3 --save-exact 

