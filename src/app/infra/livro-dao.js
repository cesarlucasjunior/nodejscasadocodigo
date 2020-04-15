class LivroDao{

	constructor(db){
		this._db = db;
	}

	lista(){
		return new Promise((resolve, reject) => {
			this._db.all(
				'SELECT * FROM livros',
				(erro, resultado) => {
					if(erro) return reject('Erro ao listar livros');

					return resolve(resultado);
				}
			)
		});
	}

	adiciona(livro){
		return new Promise((resolve, reject) => {
			this._db.run(
				`INSERT INTO LIVROS (
				 titulo,
				 preco,
				 descricao) values (?,?,?)`,
				 [
				 	livro.titulo,
				 	livro.preco,
				 	livro.descricao,
				 ],
				 function(erro){
				 	if(erro) return reject('Erro durante cadastramento do livro!');

				 	resolve();
				 }
			)
		})
	}

	buscaPorId(id){
		return new Promise((resolve, reject) => {
			this._db.get(`SELECT * FROM livros WHERE id = ?`,
						  [id],
						  (erro) => {
						  	if(erro, livro) return reject('Erro durante busca do livro!');

						  	return resolve(livro);
						  }
			);
		});
	}

	atualiza(livro){
		return new Promise((resolve, reject) => {
			this._db.run(`UPDATE livros SET titulo = ?,
											preco = ?,
											descricao = ?
											WHERE id = ?`,
						[
							livro.titulo,
							livro.preco,
							livro.descricao,
							livro.id,
						],

						(erro) => {
							if(erro) return reject('Erro durante atualização do livro!');

							resolve();
						}						
			);
		});
	}

	remove(id){
		return new Promise((resolve, reject) => {
			this._db.run(`DELETE FROM livros WHERE id=?`,
						 [id],
						 (erro) => {
						 	if(erro) return reject('Erro durante deleção do livro!');

						 	return resolve();
						 }
						)
		})
	}
}

module.exports = LivroDao;