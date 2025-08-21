import  Question from '../../models/questions.js';

export const fetchAllQuestions = async () => {
    const questions = await Question.find();
    return questions;
}

export const fetchQuestionsById = async (id) => {
    const question = await Question.findById(id);
    return question;
};