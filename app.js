const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');

console.clear();

/* 
COMPARACION
console.log(process.argv);
console.log(argv.base);
 */

/* 
METODO SIN PAQUETE YARGS
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5]= arg3.split('=');
 */

crearArchivo(argv.b, argv.l, argv.t)
    .then(nombreArchivo => console.log(`${nombreArchivo} creada`.bgGreen))
    .catch(err => console.log(err.red));

