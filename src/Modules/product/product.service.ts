// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Product } from '../../schemas/product.schema';
// import { CreateProductDto } from './dto/create-product.dto';

// @Injectable()
// export class ProductService {
//   constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

//   async create(createProductDto: CreateProductDto): Promise<Product> {
//     const product = new this.productModel(createProductDto);
//     return product.save();
//   }

//   async findOne(id: string): Promise<Product> {
//     return this.productModel.findById(id).exec();
//   }
// }  // src/modules/product/product.service.ts  
// src/modules/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto);
    return product.save(); // Save to MongoDB
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec(); // Find product by ID
  }
}



 

