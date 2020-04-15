//Vinculação entre o node e express com o markojs:
require('marko/node-require').install();
require('marko/express');

//Arquivo responsável por definir o express e criar a base da aplicação - com rotas para o servidor.
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Vamos definir os middlewares da aplicação:
app.use(bodyParser.urlencoded({
	extended: true
}));

//Dentro do meu express delimito rotas passando minha aplicação express.
const rotas = require('../app/rotas/rotas');

rotas(app);

module.exports = app;