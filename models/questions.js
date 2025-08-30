import mongoose, { Schema } from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  createdAt: { type: Date, default: Date.now() },
  updatesAt: { type: Date, default: Date.now() },
  tags: { type: [String], default: [] },
  vote: { type: Number, default: 0 },
}, {
  // Add these schema options
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  strictPopulate: false // This is needed for virtual population
});

questionSchema.virtual('answers', {
  ref: 'Answer',
  localField: '_id',  
  foreignField: 'question_id',
  justOne: false
})


export default mongoose.model('Question', questionSchema);
