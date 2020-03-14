import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Genre } from './genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre) private readonly _genreRepository: Repository<Genre>
  ) {
  }

  async findGenres(): Promise<Genre[]> {
    return await this._genreRepository.find();
  }
}
