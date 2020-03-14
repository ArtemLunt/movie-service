import { PaginationParamValidationPipe } from '@app/shared/pipes';
import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { IPaginationParams } from '@app/shared/interfaces';
import { MovieService } from '@app/movie/movie.service';
import { Movie } from './movie.entity';

@Controller('api/movie')
export class MovieController {
  constructor(private _movieService: MovieService) {
  }

  @Get()
  @UsePipes(new PaginationParamValidationPipe(50))
  getMovies(
    @Query() paginationParams: IPaginationParams = { take: 10, skip: 0 },
  ): Promise<Movie[]> {
    return this._movieService.findMovies(paginationParams);
  }
}
