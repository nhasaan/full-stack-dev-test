import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
  thumb_url: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});

ProductSchema.plugin(mongoosePaginate);
