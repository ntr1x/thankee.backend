import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string

  @Prop()
  pwdHash: string

  @Prop()
  isLocked?: boolean = false
}

export const UserSchema = SchemaFactory.createForClass(User)
