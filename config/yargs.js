const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Define multiplication base'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Show data in console'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Number max table'
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número.'
        }
        return true;
    })
    .argv;

module.exports = argv;