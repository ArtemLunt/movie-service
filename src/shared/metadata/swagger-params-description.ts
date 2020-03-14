import { ApiImplicitQueryMetadata } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { IDictionary } from '@app/shared/interfaces';

export const SWAGGER_PARAMS_METADATA: IDictionary<ApiImplicitQueryMetadata> = {
  PAGINATION_TAKE: {
    name: 'take',
    required: false,
    description: 'Pagination parameter, which specifies how many items are you going to take'
  },
  PAGINATION_SKIP: {
    name: 'skip',
    required: false,
    description: 'Pagination parameter, which specifies how many items are you going to skip'
  },
};
