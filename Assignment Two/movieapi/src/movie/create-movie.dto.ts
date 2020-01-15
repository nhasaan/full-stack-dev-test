import { IsNotEmpty } from 'class-validator';

export class CreateMovieDTO {
  @IsNotEmpty()
  readonly title: string;
  @IsNotEmpty()
  readonly release_year: number;
  readonly poster: string;
  @IsNotEmpty()
  readonly description: string;
  readonly created_at: Date;
}
