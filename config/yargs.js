const opts = {
		base: {
			demand: true,
			alias: 'b'	
		},
		limite: {
			default: 10,
			alias: 'l'
		}
}

const argv = require('yargs')
	.command(
		'listar', 'Ingresar base por la cual se quiere multiplicar', opts)
	.command(
		'crear', 'Genera un archivo con la base y limite enviados', opts)
	.help()
	.argv;

module.exports = {
	argv
}