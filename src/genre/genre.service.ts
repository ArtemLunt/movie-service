import { IPaginationParams } from '@app/shared/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre) private readonly _genreRepository: Repository<Genre>
  ) {
  }

  async findGenres(paginationParams: IPaginationParams): Promise<Genre[]> {
    return await this._genreRepository.find(paginationParams);
  }
}
