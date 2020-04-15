module.exports = (app) => {

	//Importando banco de dados:
	const db = require('../../config/database.js');
	//Importando módulo LivroDao:
	const LivroDao = require('../infra/livro-dao.js');

	app.get('/', function(req, resp){

		resp.send(
			`<html>
				<head>
					<meta charset="UTF-8">
				</head>
				<body>
					<h1>Página inicial</h1>
				</body>		
			</html>` 
			);
	});

	app.get('/livros', function(req, resp){

		const livroDao = new LivroDao(db);
		livroDao.lista()
				.then((livros) => resp.marko(
					require('../view/livros/listar/listar.marko'),
					{
						livros: livros
					}
				))
				.catch((erro) => console.log(erro));
	});

	//Rota para formulário de cadastro de livro:
	app.get('/livros/form', function(req, resp){
		resp.marko(require('../view/livros/form/form.marko'))
	});

	//Rota para cadastrar livro no banco de dados:
	app.post('/livros', function(req, resp){
		console.log(req.body);

		const livroDao = new LivroDao(db);
		livroDao.adiciona(req.body)
				.then(resp.redirect('/livros'))
				.catch(erro => console.log(erro));
	});
}
