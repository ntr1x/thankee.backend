import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import { AppService } from '@src/app.service'
import { AppConfig } from './app.config'

@Controller()
export class AppController {
  
  @Inject()
  private readonly appService: AppService
  
  // @Inject()
  // private readonly configService: ConfigService
  
  @Get()
  getHello (): string {
    return this.appService.getHello()
  }

  @Get('/config/app')
  getAppConfig (): ConfigType<typeof AppConfig> {
    return this.appService.getAppConfig()
  }
}
