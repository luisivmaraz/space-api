import espacioDAO from "../dao/espacioDao.js";

const C = console.log.bind(console.log);

export const getAllEspacios = (req, res) => {
    espacioDAO.getAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.error(err));
};

export const getOneEspacio = (req, res) => {
    espacioDAO.getOne(req.params.identifier)
        .then(result => {
            if (result != null) {
                res.json(result);
            } else {
                res.json({
                    status: "Espacio not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const insertEspacio = (req, res) => {
    espacioDAO.insertEspacio(req.body)
        .then(result => {
            if (result) {
                res.json({
                    status: "Espacio saved"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};

export const updateEspacio = (req, res) => {
    espacioDAO.updateEspacio(req.params.identifier, req.body)
        .then(result => {
            if (result) {
                res.json({
                    status: "Espacio updated"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};

export const deleteEspacio = (req, res) => {
    espacioDAO.deleteEspacio(req.params.identifier)
        .then(result => {
            if (result) {
                res.json({
                    status: "Espacio deleted"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });

        
};


export const deleteAllEspacios = (req, res) => {
    espacioDAO.deleteAll()
        .then(result => {
            res.json({
                status: result  
            });
        })
        .catch(err => {
            res.json({
                status: "Server unavailable",
                error: err
            });
        });
};