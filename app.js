import express from 'express';
import questionsRouter from './routes/questions/route.js';
import answersRouter from './routes/answers/route.js';
import authMiddleware from './middleware/auth.js';

//express server
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from app.js');
});

app.use(authMiddleware);
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

export default app;