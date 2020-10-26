/*const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un trabajo / tarea por hacer'
    }
}

const optsLst = {
    estado: {
        alias: 'e',
        default: 'C',
        desc: 'C lista completas  / P lista pendientes '
    }
}

const optsAct = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un trabajo / tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Actualiza la tarea o no dependiendo el valor'
    }
}*/

const api = '4a5c42e78a7abe0791ef20615a8e0886';

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv,
    api
}