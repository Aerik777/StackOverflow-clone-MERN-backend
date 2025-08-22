import  Answer from '../../models/answers.js';

export const fetchAllAnswers = async () => {
    const answers = await Answer.find();
    return answers;
}

export const fetchAnswersById = async (id) => {
    const answer = await Answer.findById(id);
    return answer;
}

export const createAnswer = async (answerData) => {
    const newAnswer = await Answer.create(answerData);
    return newAnswer;
}