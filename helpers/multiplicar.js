const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
   try {

        let salida = '';
        let consola = '';

        for (let step = 1; step <= hasta; step++) {
            salida += (`${ base } x ${ step } = ${ base * step}\n` )
            consola += (`${ base } ${'x'.green} ${ step } ${'='.green} ${ base * step}\n` )
        }

        if (listar) {
            console.log('================='.green);
            console.log('Tabla del '.green, colors.blue(base));
            console.log('================='.green);    
            console.log(salida);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}