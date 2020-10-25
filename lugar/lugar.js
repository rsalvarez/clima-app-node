const axios = require('axios');

const getLugarLatlong = async(dir) => {

    const location = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=4a5c42e78a7abe0791ef20615a8e0886`,
    });

    const resp = await instance.get();

    if (resp.data) {
        console.log(resp.data);
        return {
            direccion: resp.data.name,
            long: resp.data.coord.lon,
            lat: resp.data.coord.lat,
            tiempo: resp.data.weather[0].description,
            temp: resp.data.main
        };

    } else {
        throw new Error('Error en la llamada para la ciudad ' + dir);
    }

};

module.exports = {
    getLugarLatlong
}