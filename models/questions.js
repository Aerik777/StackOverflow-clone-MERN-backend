import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatesAt: { type: Date, default: Date.now() },
  tags: { type: [String], default: [] },
  vote: { type: Number, default: 0 },
});

export default mongoose.model('Question', questionSchema);
