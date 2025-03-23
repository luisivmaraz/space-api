import Espacio from '../models/espacioModel.js'

const C = console.log.bind(console.log)
const espacioDAO = {}

espacioDAO.getAll = async () => {
    const espacios = await Espacio.find()
    return espacios
}

espacioDAO.getOne = async (identifierEspacio) => {
    const espacio = await Espacio.findOne({ identifier: identifierEspacio })
    return espacio
}

espacioDAO.insertEspacio = async (espacio) => {
    try {
        const espacioSaved = new Espacio(espacio);
        await espacioSaved.save();
        return true;
    } catch (error) {
        console.error("Error al guardar el espacio:", error);
        return false; // O manejar el error de otra forma
    }
};


espacioDAO.updateEspacio = async (identifierEspacio, espacio) => {
    const espacioUpdated = await Espacio.findOneAndUpdate({ identifier: identifierEspacio }, espacio)
    if (espacioUpdated != null) {
        return true
    } else {
        return false
    }
}

espacioDAO.deleteEspacio = async (identifierEspacio) => {
    const espacioDeleted = await Espacio.findOneAndDelete({ identifier: identifierEspacio })
    if (espacioDeleted != null) {
        return true
    } else {
        return false
    }
}


espacioDAO.deleteAll = async () => {
    await Espacio.deleteMany({});  
    return "All espacios deleted";
};


export default espacioDAO;
