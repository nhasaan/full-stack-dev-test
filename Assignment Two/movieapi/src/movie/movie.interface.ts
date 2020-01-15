import { Document } from 'mongoose';

export interface Movie extends Document {
  readonly title: string;
  readonly release_year: string;
  readonly poster: string;
  readonly description: string;
  readonly created_at: Date;
}
