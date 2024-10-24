import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from '../../schemas/cart.schema';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async create(addToCartDto: AddToCartDto): Promise<Cart> {
    const cart = new this.cartModel(addToCartDto);
    return cart.save();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartModel.findById(id).populate('items').exec();
  }
}
