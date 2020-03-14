import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { GenreService } from './genre.service';
import { SwaggerTag } from '@app/swagger';
import { Genre } from './genre.entity';

@Controller('api/genre')
@ApiTags(SwaggerTag.Genres)
export class GenreController {
  constructor(private _genreService: GenreService) {
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Genre,
    description: 'Returns the whole list of movie genres',
    isArray: true,
  })
  getGenres(): Promise<Genre[]> {
    return this._genreService.findGenres();
  }
}
