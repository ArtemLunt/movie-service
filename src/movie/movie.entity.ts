import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '@app/genre';

@Entity()
export class Movie {
  @ApiProperty() @PrimaryGeneratedColumn() id: number;
  @ApiProperty() @Column() backdrop_path: string;
  @ApiProperty() @Column() poster_path: string;
  @ApiProperty() @Column() original_language: string;
  @ApiProperty() @Column() original_title: string;
  @ApiProperty() @Column() overview: string;
  @ApiProperty() @Column() title: string;
  @ApiProperty() @Column() video: boolean;
  @ApiProperty() @Column() popularity: number;
  @ApiProperty() @Column() vote_average: number;
  @ApiProperty() @Column() vote_count: number;

  @ApiProperty({type: Date}) @Column() release_date: Date;

  @ApiProperty({
    isArray: true,
    type: Genre
  })
  @ManyToMany(() => Genre, {cascade: true, eager: true})
  @JoinTable({
    name: 'movie_genre',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_id', referencedColumnName: 'id' },
  })
  genres: Genre[];
}
