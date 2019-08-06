const descripcion = {
    descripcion: {
        demand: true,
        descripcion: '',
        alias: 'd'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear nueva tarea por hacer',
        descripcion)
    .command('actualizar', 'Actualizar tarea por hacer', descripcion, completado)
    .command('borrar', 'Borrar tarea',
        descripcion)
    .help()
    .argv;

module.exports = {
    argv
}