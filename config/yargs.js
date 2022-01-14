const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Define multiplication base'
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        default: false,
        describe:'Show data in console'
    })
    .option('t',{
        alias: 'to',
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