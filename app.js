import express from 'express';
import cors from 'cors';
import questionsRouter from './routes/questions/route.js';
import answersRouter from './routes/answers/route.js';
import authMiddleware from './middleware/auth.js';
import authRouter from './routes/auth/route.js';
import cookieParser from 'cookie-parser';


//express server
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello from app.js');
});


app.use('/auth', authRouter);
app.use(authMiddleware);
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

export default app;