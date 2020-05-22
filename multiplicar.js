const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limit) => {

	return new Promise( (resolve, reject) => {

		let result = [];

		if(!Number.isInteger(base)) 
			throw `La base debe ser un entero`;

		for (let i = 1; i <= limit; i++) {
			result += `${base} * ${i} =  ${i * base} \n`;
		}	

		fs.writeFile(`./tablas/tabla-del-${base}-limite-${limit}.txt`, result, (err) => {

		  if(err) 
		  	throw err;

		  const nameFile = `tabla-del-${base}.txt`.green;
		  resolve(`Se guardo el archivo: ${nameFile}`);

		});

	})

}

let listarTabla = (base, limit) => {

	let result = [];

	for (let i = 1; i <= limit; i++) {
		result += `${base} * ${i} =  ${i * base} \n`;
	}	

	console.log(result);
}



module.exports = {
	crearArchivo,
	listarTabla
}

