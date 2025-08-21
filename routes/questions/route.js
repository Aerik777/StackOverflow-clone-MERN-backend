import { Router } from "express";
import { getAllQuestion, getQuestionById } from './controller.js';

const router = Router();

router.get('/', getAllQuestion);


router.post('/', (req, res) => {
    res.send('create new questions');
});

router.put('/:id', (req, res) => {
    res.send('update question by ID:');
});

router.delete('/:id', (req, res) => {
    res.send('delete question by ID:');
});
export default router;