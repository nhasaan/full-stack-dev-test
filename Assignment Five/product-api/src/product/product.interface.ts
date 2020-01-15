import { Document } from 'mongoose';

export interface Product extends Document {
  readonly title: string;
  readonly price: number;
  readonly quantity: number;
  readonly thumb_url: string;
  readonly description: string;
  readonly created_at: Date;
}
