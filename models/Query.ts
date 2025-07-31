// models/Query.ts
import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
  email: String,
  input: String,
  response: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Query || mongoose.model('Query', QuerySchema);
