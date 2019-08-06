const fs = require('fs');

let listadoPorHacer;

const getListado = (completado = false) => {

    cargarDB()
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('No se puedo grabar');

    })

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = descripcion => {

    cargarDB();

    let porHarcer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHarcer);

    guardarDB()

    return porHarcer;
};

const borrar = descripcion => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB()
        return true;
    } else {
        return false;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}