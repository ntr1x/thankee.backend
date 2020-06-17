import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ObjectSchema } from '@hapi/joi'

@Injectable()
export class JoiValidationPipe implements PipeTransform<any, any> {
  constructor (
    private schema: ObjectSchema
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
  transform (value: any, metadata: ArgumentMetadata): any {
    const { error } = this.schema.validate(value)
    if (error) {
      throw new BadRequestException(error.message, 'Validation failed')
    }
    return value
  }
}
