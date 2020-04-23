//Vinculação entre o node e express com o markojs:
require('marko/node-require').install();
require('marko/express');

//Arquivo responsável por definir o express e criar a base da aplicação - com rotas para o servidor.
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Vamos definir os middlewares da aplicação:
app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride((req, res) => {

    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method;
        delete req.body._method;

        return method;
    }
}));

//Dentro do meu express delimito rotas passando minha aplicação express.
const rotas = require('../app/rotas/rotas');

rotas(app);

module.exports = app;