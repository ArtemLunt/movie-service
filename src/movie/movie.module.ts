import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '@app/movie/movie.entity';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie])
  ],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule {}
