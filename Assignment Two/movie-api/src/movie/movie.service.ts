import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.interface';
import { CreateMovieDTO } from './create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<Movie>,
  ) {}

  async getAllMovie(page: number, limit: number): Promise<Movie[]> {
    // ().exec()
    const movies = await this.movieModel.paginate({}, { page, limit });
    return movies;
  }
  // Get a single movie
  async getMovie(movieID): Promise<Movie> {
    const movie = await this.movieModel.findById(movieID).exec();
    return movie;
  }
  // post a single movie
  async addMovie(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const newMovie = await this.movieModel(createMovieDTO);
    return newMovie.save();
  }
  // Edit movie details
  async updateMovie(movieID, createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const updatedMovie = await this.movieModel.findByIdAndUpdate(
      movieID,
      createMovieDTO,
      { new: true },
    );
    return updatedMovie;
  }
  // Delete a movie
  async deleteMovie(movieID): Promise<any> {
    const deletedMovie = await this.movieModel.findByIdAndRemove(movieID);
    return deletedMovie;
  }
}
