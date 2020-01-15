import { IsNotEmpty } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  readonly title: string;
  @IsNotEmpty()
  readonly price: number;
  @IsNotEmpty()
  readonly quantity: number;
  readonly thumb_url: string;
  @IsNotEmpty()
  readonly description: string;
  readonly created_at: Date;
}
