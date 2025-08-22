import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  answer: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  votes: {type: Number, default: 0},
  updatesAt: { type: Date, default: Date.now() },
});

export default mongoose.model('Answer', answerSchema);