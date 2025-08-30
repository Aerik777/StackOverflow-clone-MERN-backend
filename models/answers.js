import mongoose, { Schema } from 'mongoose';

const answerSchema = new mongoose.Schema({
  question_id: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now() },
  votes: {type: Number, default: 0},
  updatesAt: { type: Date, default: Date.now() },
});

export default mongoose.model('Answer', answerSchema);