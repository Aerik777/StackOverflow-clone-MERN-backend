import { fetchAllQuestions } from "./service.js";
import { fetchQuestionsById } from "./service.js";

export const getAllQuestion = async (req, res) => {
    const questions = await fetchAllQuestions();
    res.send(questions);
};

export const getQuestionById = async (req, res) => {
    const { id } = req.params;
    const question = await fetchQuestionsById(id);
    res.send(id);
    console.log(id);
    res.send(question);
}

