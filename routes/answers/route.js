import { Router } from "express";
import { createNewAnswer } from "./controller.js";

const router = Router();

// router.get('/', getAllAnswer);

// router.get('/:id', getAnswerById);

// router.post('/',createNewAnswer);

// router.put('/:id', (req, res) => {
//     res.send('update answers by ID:');
// });

// router.delete('/:id', (req, res) => {
//     res.send('delete answers by ID:');
// });

router.post ('/:question_id', createNewAnswer);

export default router;
