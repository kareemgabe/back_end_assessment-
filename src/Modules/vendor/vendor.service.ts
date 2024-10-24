import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from '../../schemas/vendor.schema';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  async create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    const vendor = new this.vendorModel(createVendorDto);
    return vendor.save();
  }

  async findOne(id: string): Promise<Vendor> {
    return this.vendorModel.findById(id).populate('products').exec();
  }
}
