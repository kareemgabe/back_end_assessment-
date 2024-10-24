// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document, Types } from 'mongoose';

// @Schema({ timestamps: true })
// export class User extends Document {
//   @Prop({ required: true })
//   username: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password_hash: string;

//   @Prop({ type: [{ type: Types.ObjectId, ref: 'Cart' }] })
//   carts: Types.ObjectId[];
// }

// export const UserSchema = SchemaFactory.createForClass(User);

// src/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;  // Make sure this matches with your DTO
}

export const UserSchema = SchemaFactory.createForClass(User);

