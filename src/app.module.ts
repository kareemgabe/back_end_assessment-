import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { VendorModule } from './modules/vendor/vendor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-assessment'),
    UserModule,
    ProductModule,
    CartModule,
    VendorModule,
    // AuthModule,
  ],
})
export class AppModule {}
