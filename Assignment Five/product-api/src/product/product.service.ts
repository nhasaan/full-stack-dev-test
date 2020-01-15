import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.interface';
import { CreateProductDTO } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getAllProduct(page: number, limit: number): Promise<Product[]> {
    // ().exec()
    const products = await this.productModel.paginate({}, { page, limit });
    return products;
  }
  // Get a single product
  async getProduct(productID): Promise<Product> {
    const product = await this.productModel.findById(productID).exec();
    return product;
  }
  // post a single product
  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await this.productModel(createProductDTO);
    return newProduct.save();
  }
  // Edit product details
  async updateProduct(
    productID,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
  // Delete a product
  async deleteProduct(productID): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(productID);
    return deletedProduct;
  }
}
