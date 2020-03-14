import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from './genre.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn() id: number;

  @Column() backdrop_path: string;

  @Column() poster_path: string;

  @Column() original_language: string;

  @Column() original_title: string;

  @Column() overview: string;

  @Column() release_date: Date;

  @Column() title: string;

  @Column() video: boolean;

  @Column() popularity: number;

  @Column() vote_average: number;

  @Column() vote_count: number;

  @ManyToMany(() => Genre, {cascade: true, eager: true})
  @JoinTable({
    name: 'movie_genre',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_id', referencedColumnName: 'id' },
  })
  genres: Genre[];
}
