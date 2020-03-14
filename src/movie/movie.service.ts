import { IPaginationParams } from '@app/shared/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { Genre } from './genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private readonly _movieRepository: Repository<Movie>,
    @InjectRepository(Genre) private readonly _genreRepository: Repository<Genre>,
  ) {
  }
  async findMovies(paginationParams: IPaginationParams): Promise<any[]> {
    return await this._movieRepository.find(paginationParams);
  }
}
