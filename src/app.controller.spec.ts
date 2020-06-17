import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'
// import { AppModule } from '@src/app.module'
import {
  AppConfig,
  MongoConfig,
  RabbitConfig,
} from '@src/app.config'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [
        ConfigModule.forFeature(AppConfig),
        ConfigModule.forFeature(MongoConfig),
        ConfigModule.forFeature(RabbitConfig),
      ],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello!"', () => {
      expect(appController.getHello()).toBe('Hello!')
    })
  })
})
