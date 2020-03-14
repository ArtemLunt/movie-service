import { IPaginationParams } from '@app/shared/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private readonly _movieRepository: Repository<Movie>
  ) {
  }

  async findMovies(paginationParams: IPaginationParams): Promise<Movie[]> {
    return await this._movieRepository.find(paginationParams);
  }
}
