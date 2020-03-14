import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '@app/movie/movie.entity';
import { Genre } from '@app/movie/genre.entity';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Genre])
  ],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule {}
