import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Cart extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({ default: 'active' })
  status: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'CartItem' }] })
  items: Types.ObjectId[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);

