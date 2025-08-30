import {
  fetchAllQuestionsWithAnswers,
  fetchQuestionsWithAnswersById,
  createQuestion,
} from './service.js';

export const getAllQuestion = async (req, res) => {
  const questions = await fetchAllQuestionsWithAnswers();
  res.send(questions);
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  const question = await fetchQuestionsWithAnswersById(id);
  // res.send(id);
  // console.log(id);
  res.send(question);
};

export const createNewQuestion = async (req, res) => {
  const question = req.body;
  const userId = req.validUser.id;
  const newQuestion = await createQuestion({
    ...question,
    author: userId,
  });
  res.status(201).send(newQuestion);
};
