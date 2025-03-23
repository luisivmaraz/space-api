import { Router } from "express";
import { deleteEspacio, getAllEspacios, getOneEspacio, insertEspacio, updateEspacio, deleteAllEspacios } from "../controllers/espaciosController.js";

const router = Router();

router.get('/', getAllEspacios);
router.get('/:identifier', getOneEspacio);
router.post('/', insertEspacio);
router.put('/:identifier', updateEspacio);
router.delete('/:identifier', deleteEspacio);
router.delete('/', deleteAllEspacios);

export default router;
