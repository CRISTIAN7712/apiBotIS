const { response } = require("express");

module.exports = function (app, databaseServices) {

    app.get('/', (req, response) => {
        response.json({})
    });

    app.put('/estudiantes/:id', (req, response) => {
        const estudianteId = req.params.id;
        const nuevosDatos = req.body;

        databaseServices.actualizarEstudiante(estudianteId, nuevosDatos)
            .then(() => {
                response.json({ 'mensaje': 'Estudiante actualizado' });
            }).catch(e => {
                response.status(500).json(e);
            });
    });

    app.delete('/estudiantes/:id', (req, response) => {
        const estudianteId = req.params.id;

        databaseServices.eliminarEstudiante(estudianteId)
            .then(() => {
                response.json({ 'mensaje': 'Estudiante eliminado' });
            }).catch(e => {
                response.status(500).json(e);
            });
    });


    app.get('/estudiantes/', (request, response) => {
        databaseServices.getEstudiante()
            .then(estudiantes => {
                response.json(estudiantes)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.get('/estudiantes/:id', (req, response) => {
        const estudianteId = req.params.id;

        databaseServices.obtenerEstudianteId(estudianteId)
            .then(estudiantes => {
                response.json(estudiantes)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.post('/estudiantes', (req, response) => {
        const nuevoEstudiante = req.body;
        databaseServices.crearEstudiante(
            nuevoEstudiante.Apellidos,
            nuevoEstudiante.Nombres,
            nuevoEstudiante.Identificacion,
            nuevoEstudiante.Correo,
            nuevoEstudiante.Fecha_Nacimiento)
            .then(() => {
                response.json({ 'mensaje': 'Estudiante Creado' })
            }).catch(e => {
                response.status(500).json(e);
            })

    })

    app.get('/semestrea', (request, response) => {
        databaseServices.getSemestreA()
            .then(semestreA => {
                response.json(semestreA)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.post('/semestrea', (req, response) => {
        const nuevoSemestre = req.body;
        databaseServices.crearSemestreA(
            nuevoSemestre.Fecha,
            nuevoSemestre.Actividad,
            nuevoSemestre.Requisito)
            .then(() => {
                response.json({ 'mensaje': 'Semestre A Creado' })
            }).catch(e => {
                response.status(500).json(e);
            })

    })

    app.get('/semestreb', (request, response) => {
        databaseServices.getSemestreB()
            .then(semestreB => {
                response.json(semestreB)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.post('/semestreb', (req, response) => {
        const nuevoSemestre = req.body;
        databaseServices.crearSemestreB(
            nuevoSemestre.Fecha,
            nuevoSemestre.Actividad,
            nuevoSemestre.Requisito)
            .then(() => {
                response.json({ 'mensaje': 'Semestre B Creado' })
            }).catch(e => {
                response.status(500).json(e);
            })

    })

    app.get('/sustentacion', (request, response) => {
        databaseServices.getSustentacion()
            .then(sustentacion => {
                response.json(sustentacion)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.post('/sustentacion', (req, response) => {
        const nuevoGrado = req.body;
        databaseServices.crearSustentacion(
            nuevoGrado.Fecha,
            nuevoGrado.Hora,
            nuevoGrado.Nombre,
            nuevoGrado.Fase,
            nuevoGrado.Lugar,
            nuevoGrado.Jurados,
            nuevoGrado.Expositores,
            nuevoGrado.Asesor)
            .then(() => {
                response.json({ 'mensaje': 'Sustentacion Creada' })
            }).catch(e => {
                response.status(500).json(e);
            })

    })

    app.get('/grado', (request, response) => {
        databaseServices.getGrado()
            .then(grado => {
                response.json(grado)
            }).catch(e => {
                response.status(500).json(e);
            })
    });

    app.post('/grado', (req, response) => {
        const nuevoGrado = req.body;
        databaseServices.crearGrado(
            nuevoGrado.Fecha,
            nuevoGrado.Lugar,
            nuevoGrado.Nota)
            .then(() => {
                response.json({ 'mensaje': 'Grado Creado' })
            }).catch(e => {
                response.status(500).json(e);
            })

    })

};