import { Controller, Get, Inject, Post, Body } from '@nestjs/common'
import {
  UserModel,
  UserCreateRequest,
  userCreateRequestSchema,
} from '@src/modules/security/users.dto'
import { UsersService } from '@src/modules/security/users.service'
import { JoiValidationPipe } from '@src/pipes/joi-validation.pipe'

@Controller({
  path: 'manager/users'
})
export class UsersController {
  
  @Inject()
  private readonly usersService: UsersService
    
  @Get()
  async selectUsers (): Promise<UserModel[]> {
    return this.usersService.selectUsers()
  }

  @Post()
  async createUser (
    @Body(new JoiValidationPipe(userCreateRequestSchema)) request: UserCreateRequest
  ): Promise<UserModel> {
    console.log('request', typeof request, request)
    return this.usersService.createUser(request)
  }
}
