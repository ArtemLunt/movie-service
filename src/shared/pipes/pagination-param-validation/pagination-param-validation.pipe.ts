import { SKIP_LESS_THAN_ZERO, TAKE_LESS_THAN_ZERO, TAKE_MAX_EXCEEDED } from './pagination-params-validation.constant';
import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { IPaginationParams } from '@app/shared/interfaces';

export class PaginationParamValidationPipe implements PipeTransform {
  constructor(private readonly _maxTakeValue: number) {
  }

  transform(value: IPaginationParams, metadata: ArgumentMetadata): IPaginationParams {
    const {take, skip} = value;

    if (take > this._maxTakeValue) {
      throw new BadRequestException(TAKE_MAX_EXCEEDED(this._maxTakeValue));
    }

    if (take < 0) {
      throw new BadRequestException(TAKE_LESS_THAN_ZERO);
    }

    if (skip < 0) {
      throw new BadRequestException(SKIP_LESS_THAN_ZERO);
    }

    return value;
  }
}
