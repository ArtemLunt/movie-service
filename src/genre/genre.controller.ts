import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { PaginationParamValidationPipe } from '@app/shared/pipes';
import { SWAGGER_PARAMS_METADATA } from '@app/shared/metadata';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenreService } from './genre.service';
import { SwaggerTag } from '@app/swagger';
import { Genre } from './genre.entity';

@Controller('api/genre')
@ApiTags(SwaggerTag.Genres)
export class GenreController {
  constructor(private _genreService: GenreService) {
  }

  @Get()
  @UsePipes(new PaginationParamValidationPipe(50))
  @ApiResponse({
    status: 200,
    type: Genre,
    description: 'Returns list of the genres by specified pagination params',
    isArray: true,
  })
  @ApiImplicitQuery(SWAGGER_PARAMS_METADATA.PAGINATION_TAKE)
  @ApiImplicitQuery(SWAGGER_PARAMS_METADATA.PAGINATION_SKIP)
  getMovies(
    @Query('take') take = 10,
    @Query('skip') skip = 0,
  ): Promise<Genre[]> {
    return this._genreService.findGenres({take, skip});
  }
}
