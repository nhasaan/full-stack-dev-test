import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const MovieSchema = new mongoose.Schema({
  title: String,
  release_year: String,
  poster: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});

MovieSchema.plugin(mongoosePaginate);
