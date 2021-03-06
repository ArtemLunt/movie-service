import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { PaginationParamValidationPipe } from '@app/shared/pipes';
import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { SWAGGER_PARAMS_METADATA } from '@app/shared/metadata';
import { MovieService } from '@app/movie/movie.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerTag } from '@app/swagger';
import { Movie } from './movie.entity';

@ApiTags(SwaggerTag.Movies)
@Controller('api/movie')
export class MovieController {
  constructor(private _movieService: MovieService) {
  }

  @Get()
  @UsePipes(new PaginationParamValidationPipe(50))
  @ApiResponse({
    status: 200,
    type: Movie,
    description: 'Returns list of the movies by specified pagination params',
    isArray: true,
  })
  @ApiImplicitQuery(SWAGGER_PARAMS_METADATA.PAGINATION_TAKE)
  @ApiImplicitQuery(SWAGGER_PARAMS_METADATA.PAGINATION_SKIP)
  getMovies(
    @Query('take') take = 10,
    @Query('skip') skip = 0,
  ): Promise<Movie[]> {
    return this._movieService.findMovies({take, skip});
  }
}
