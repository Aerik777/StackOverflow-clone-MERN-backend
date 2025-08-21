import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Get all answers');
});

router.get('/:id', (req, res) => {
    res.send('Get answers by ID: ' + req.params.id);
});

router.post('/', (req, res) => {
    res.send('create new answers');
});

router.put('/:id', (req, res) => {
    res.send('update answers by ID:');
});

router.delete('/:id', (req, res) => {
    res.send('delete answers by ID:');
});

export default router;
