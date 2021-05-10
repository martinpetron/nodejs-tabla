const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

//process.argv trae los argumentos de la consola.

// console.log( argv );

crearArchivo ( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch ( err => console.log( err ) );
