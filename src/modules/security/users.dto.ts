import { ApiProperty } from "@nestjs/swagger"
import * as Joi from '@hapi/joi'

export class UserModel {
  @ApiProperty()
  id: string

  @ApiProperty()
  email: string

  @ApiProperty()
  isLocked: boolean
}

export class UserCreateRequest {
  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  isLocked: boolean
}

export class UserRemoveRequest {
  @ApiProperty()
  id: string
}

export class UserPasswdRequest {
  @ApiProperty()
  id: string

  @ApiProperty()
  pwdHash: string
}

export class UserLockRequest {
  @ApiProperty()
  id: string

  @ApiProperty()
  isLocked: boolean
}

export const userCreateRequestSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  isLocked: Joi.bool()
})
