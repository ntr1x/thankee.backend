import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '@src/modules/security/users.schema'
import { Model } from 'mongoose'
import {
  UserCreateRequest,
} from '@src/modules/security/users.dto'

@Injectable()
export class UsersRepository {

  @InjectModel(User.name)
  private readonly userModel: Model<User>

  async createUser (request: UserCreateRequest): Promise<User> {
    const user = await this.userModel.create({
      // _id: null,
      email: request.email,
      pwdHash: request.password,
      isLocked: request.isLocked,
    })
    return user
  }

  async findAll (): Promise<User[]> {
    return this.userModel.find()
  }
}
