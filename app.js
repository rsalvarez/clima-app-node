//const { require } = require('yargs');

const argv = require('./config/yargs').argv;
const lug = require('./lugar/lugar');
const col = require('colors');

const getInfo = (direcc) => {

    lug.getLugarLatlong(direcc).then((result) => {
        console.log(`El clima en la ciudad de : ` + result.direccion.green + ' ( ' + result.tiempo.green +
            ` ) La tempreatura actual es de ${result.temp.temp} y tuvimos una minima de ${result.temp.temp_min} y se espera una maxima de ${result.temp.temp_max}. La humedad es de : ${result.temp.humidity} %`);
    }).catch((err) => {

        console.log(' Error : ' + err.response.data.cod + ' Err Message : ' + err.response.data.message);
    });

}

getInfo(argv.direccion);