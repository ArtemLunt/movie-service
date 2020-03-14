import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GenreModule } from '@app/genre';
import { MovieModule } from '@app/movie';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      extra: {
        ssl: true
      },
      entities: [
        __dirname + '/**/*.entity{.js,.ts}',
      ],
      logging: process.env.DB_LOGGING === 'true'
    } as PostgresConnectionOptions),
    MovieModule,
    GenreModule,
  ]
})
export class AppModule {}
