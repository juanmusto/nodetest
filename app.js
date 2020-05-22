const argv = require('./config/yargs.js').argv;

const { crearArchivo, listarTabla } = require('./multiplicar.js')

let comando = argv._[0];

switch(comando) {

	case 'listar':
		listarTabla(argv.b, argv.l);
	break

	case 'crear':
		crearArchivo(argv.b, argv.l)
			.then((archivo) => {
				console.log(archivo)
			})
			.catch(err => console.log(err))		
	break

	default: 'Comando no reconocido';
}
