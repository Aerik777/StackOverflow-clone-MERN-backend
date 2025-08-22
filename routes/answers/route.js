import { Router } from "express";
import { createNewAnswer, getAllAnswer, getAnswerById } from "./controller.js";

const router = Router();

router.get('/', getAllAnswer);

router.get('/:id', getAnswerById);

router.post('/',createNewAnswer);

router.put('/:id', (req, res) => {
    res.send('update answers by ID:');
});

router.delete('/:id', (req, res) => {
    res.send('delete answers by ID:');
});

export default router;
