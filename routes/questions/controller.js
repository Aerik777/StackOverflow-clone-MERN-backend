import { fetchAllQuestions, fetchQuestionsById, createQuestion } from "./service.js";


export const getAllQuestion = async (req, res) => {
    const questions = await fetchAllQuestions();
    res.send(questions);
};

export const getQuestionById = async (req, res) => {
    const { id } = req.params;
    const question = await fetchQuestionsById(id);
    // res.send(id);
    // console.log(id);
    res.send(question);
}

export const createNewQuestion = async (req, res) => {
    const question = req.body;
    const newQuestion = await createQuestion(question);
    res.status(201).send(newQuestion);
}