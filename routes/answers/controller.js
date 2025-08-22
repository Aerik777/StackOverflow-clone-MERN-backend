import { fetchAllAnswers, fetchAnswersById, createAnswer } from "./service.js";

export const getAllAnswer = async (req, res) => {
    const answers = await fetchAllAnswers();;
    res.send(answers);
}

export const getAnswerById = async (req, res) => {
    const { id } = req.params;
    const answer = await fetchAnswersById(id);
    res.send(answer);
}

export const createNewAnswer = async(req, res) => {
    const answerData = req.body;
    const newAnswer = await createAnswer(answerData);
    res.status(201).send(newAnswer);
}