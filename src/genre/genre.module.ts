import { GenreController } from './genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreService } from './genre.service';
import { Module } from '@nestjs/common';
import { Genre } from './genre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Genre])
  ],
  providers: [GenreService],
  controllers: [GenreController]
})
export class GenreModule {}
