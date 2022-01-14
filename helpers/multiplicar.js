const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, l = false, t = 10) => {

    try {
        let salida = '';
    
        for(let i = 1; i<= t; i++){
            salida += (`${base} x ${i} = ${base*i}\n`);
        }

        if(l){
            console.log('======================='.green);
            console.log(`    Tabla del ${base}`.green);
            console.log('======================='.green);
            console.log(salida.green);
        }
          
        fs.writeFileSync(`./ouput/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt` ;
    } catch (err) {
        throw err;
    }

}
 
module.exports = {
    /* crearArchivo: crearArchivo */
    crearArchivo
}