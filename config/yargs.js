const argv = require('yargs')  //yargs es un complemento para poner parametros a mi app --help --base etc..
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Indica la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type:'number',
        default:10,
        describe: 'Numero hasta el cual se va a multiplicar'
    })    
    .check( (argv, options) => {
        if( isNaN( argv.b )) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;