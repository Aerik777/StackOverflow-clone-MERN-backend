import Question from '../../models/questions.js';

export const fetchAllQuestionsWithAnswers = async () => {
  const questions = await Question.find()
    .populate('author')
    .populate({
      path: 'answers',
      populate: {
        path: 'author',
      },
    })
    .exec();
  return questions;
};

export const fetchQuestionsWithAnswersById = async (question_id) => {
  const question = await Question.findById(question_id)
    .populate('author')
    .populate({
      path: 'answers',
      populate: {
        path: 'author',
      },
    })
    .exec();

  return question;

  // const answer =await Answer.find({question_id: id});
  // return (question, answer);
};

export const createQuestion = async (questionData) => {
  console.log('Question Data: ', questionData);
  const newQuestion = await Question.create(questionData);
  return newQuestion;
};
