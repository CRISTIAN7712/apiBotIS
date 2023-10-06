const { default: knex } = require('knex');

const databaseServices = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    })

    const table = 'correo';
    const tableSemestreA = 'cronogramaa';
    const tableSemestreB = 'cronogramab';
    const tableSustentacion = 'fechaprogtesis';
    const tableGrado = 'fechagrado';

    const obtenerEstudianteId = (Identificacion) => {
        return knex(table)
            .where({ Identificacion: Identificacion })
    }

    const actualizarEstudiante = (Identificacion, nuevosDatos) => {
        return knex(table)
            .where({ Identificacion: Identificacion })
            .update(nuevosDatos);
    };

    const eliminarEstudiante = (Identificacion) => {
        return knex(table)
            .where({ Identificacion: Identificacion })
            .del();
    };

    const getEstudiante = () => {
        return knex(table).select();
    };

    const crearEstudiante = (Apellidos, Nombres, Identificacion, Correo, Fecha_Nacimiento) => {
        return knex(table).insert({
            Apellidos: Apellidos,
            Nombres: Nombres,
            Identificacion: Identificacion,
            Correo: Correo,
            Fecha_Nacimiento: Fecha_Nacimiento
        });
    };

    const getSemestreA = () => {
        return knex(tableSemestreA).select();
    };

    const crearSemestreA = (Fecha, Actividad, Requisito) => {
        return knex(tableSemestreA).insert({
            Fecha: Fecha,
            Actividad: Actividad,
            Requisito: Requisito
        });
    };

    const getSemestreB = () => {
        return knex(tableSemestreB).select();
    };

    const crearSemestreB = (Fecha, Actividad, Requisito) => {
        return knex(tableSemestreB).insert({
            Fecha: Fecha,
            Actividad: Actividad,
            Requisito: Requisito
        });
    };

    const getSustentacion = () => {
        return knex(tableSustentacion).select();
    };

    const crearSustentacion = (Fecha, Hora, Nombre, Fase, Lugar, Jurados, Expositores, Asesor) => {
        return knex(tableSustentacion).insert({
            Fecha: Fecha,
            Hora: Hora,
            Nombre: Nombre,
            Fase: Fase,
            Lugar: Lugar,
            Jurados: Jurados,
            Expositores: Expositores,
            Asesor: Asesor
        });
    };

    const getGrado = () => {
        return knex(tableGrado).select();
    };

    const crearGrado = (Fecha, Lugar, Nota) => {
        return knex(tableGrado).insert({
            Fecha: Fecha,
            Lugar: Lugar,
            Nota: Nota
        });
    };
    return { crearEstudiante, getEstudiante, actualizarEstudiante, eliminarEstudiante, crearSemestreA, getSemestreA, crearSemestreB, getSemestreB, crearSustentacion, getSustentacion, crearGrado, getGrado, obtenerEstudianteId }
};

module.exports = {
    databaseServices
};

