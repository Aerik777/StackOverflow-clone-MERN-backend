import { Router } from "express";
import { getAllQuestion, getQuestionById, createNewQuestion } from './controller.js';

const router = Router();

router.get('/', getAllQuestion);
router.get('/:id', getQuestionById);

router.post('/', createNewQuestion);

router.put('/:id', (req, res) => {
    res.send('update question by ID:');
});

router.delete('/:id', (req, res) => {
    res.send('delete question by ID:');
});
export default router;