import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@src/modules/database/database.module'
import { SecurityModule } from '@src/modules/security/security.module'
import { AppService } from './app.service'
import {
  AppConfig,
  MongoConfig,
  RabbitConfig,
} from './app.config'

@Module({
  imports: [
    ConfigModule.forFeature(AppConfig),
    ConfigModule.forFeature(MongoConfig),
    ConfigModule.forFeature(RabbitConfig),
    DatabaseModule,
    SecurityModule,
  ],
  providers: [
    AppService
  ],
  exports: [
    AppService
  ]
})
export class AppModule {}
