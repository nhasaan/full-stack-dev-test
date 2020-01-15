import {
  Controller,
  Post,
  Res,
  Delete,
  Query,
  HttpStatus,
  NotFoundException,
  Body,
  Put,
  Param,
  Get,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  // add a product
  @Post()
  async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.addProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product has been created successfully',
      product,
    });
  }

  // Retrieve products list
  @Get()
  async getAllProduct(@Res() res, @Query('page') page, @Query('limit') limit) {
    const pageNumber = page || 1;
    const sizeLimit = limit || 10;
    const products = await this.productService.getAllProduct(
      pageNumber,
      sizeLimit,
    );
    return res.status(HttpStatus.OK).json(products);
  }

  // Fetch a particular product using ID
  @Get(':productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    }
    return res.status(HttpStatus.OK).json(product);
  }

  // Update a product's details
  @Put(':productID')
  async updateProduct(
    @Res() res,
    @Param('productID') productID,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Product has been successfully updated',
      product,
    });
  }

  // Delete a product
  @Delete(':productID')
  async deleteProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.deleteProduct(productID);
    if (!product) {
      throw new NotFoundException('Product does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Product has been deleted',
      product,
    });
  }
}
