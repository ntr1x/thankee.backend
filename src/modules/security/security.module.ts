import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DatabaseModule } from '@src/modules/database/database.module'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import {
  User,
  UserSchema,
} from './users.schema'
import { UsersRepository } from './users.repository'

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [
    UsersService,
    UsersRepository,
  ],
  providers: [
    UsersService,
    UsersRepository,
  ],
  controllers: [
    UsersController,
  ],
})
export class SecurityModule {}