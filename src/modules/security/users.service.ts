import { Injectable, Inject } from '@nestjs/common'
import { UserModel, UserCreateRequest } from '@src/modules/security/users.dto'
import { UsersRepository } from '@src/modules/security/users.repository'

@Injectable()
export class UsersService {

  @Inject()
  private readonly usersRepository: UsersRepository

  async selectUsers (): Promise<UserModel[]> {
    const users = await this.usersRepository.findAll()
    return users.map(
      user => <UserModel> user.toObject()
    )
  }

  async createUser (request: UserCreateRequest): Promise<UserModel> {
    throw new Error("Method not implemented.")
  }
}
