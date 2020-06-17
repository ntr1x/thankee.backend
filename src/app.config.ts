import { get as getProperty } from 'config'
import { registerAs } from '@nestjs/config'

export const AppConfig = registerAs('app', () => getProperty('app'))
export const MongoConfig = registerAs('mongo', () => getProperty('mongo'))
export const RabbitConfig = registerAs('rabbit', () => getProperty('rabbit'))
