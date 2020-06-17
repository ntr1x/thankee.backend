import { Injectable, Inject } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { AppConfig } from '@src/app.config'

@Injectable()
export class AppService {

  @Inject(AppConfig.KEY)
  private readonly appConfig: ConfigType<typeof AppConfig>

  // @Inject()
  // private readonly configService: ConfigService

  getHello (): string {
    return 'Hello!'
  }

  getAppConfig (): ConfigType<typeof AppConfig> {
    return this.appConfig
  }
}
