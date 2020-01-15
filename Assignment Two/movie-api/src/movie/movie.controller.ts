import {
  Controller,
  Post,
  Res,
  Delete,
  Query,
  HttpStatus,
  NotFoundException,
  Body,
  Put,
  Param,
  Get,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDTO } from './create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  // add a movie
  @Post()
  async addMovie(@Res() res, @Body() createMovieDTO: CreateMovieDTO) {
    const movie = await this.movieService.addMovie(createMovieDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been created successfully',
      movie,
    });
  }

  // Retrieve movies list
  @Get()
  async getAllMovie(@Res() res, @Query('page') page, @Query('limit') limit) {
    const pageNumber = page || 1;
    const sizeLimit = limit || 10;
    const movies = await this.movieService.getAllMovie(pageNumber, sizeLimit);
    return res.status(HttpStatus.OK).json(movies);
  }

  // Fetch a particular movie using ID
  @Get(':movieID')
  async getMovie(@Res() res, @Param('movieID') movieID) {
    const movie = await this.movieService.getMovie(movieID);
    if (!movie) {
      throw new NotFoundException('Movie does not exist!');
    }
    return res.status(HttpStatus.OK).json(movie);
  }

  // Update a movie's details
  @Put(':movieID')
  async updateMovie(
    @Res() res,
    @Param('movieID') movieID,
    @Body() createMovieDTO: CreateMovieDTO,
  ) {
    const movie = await this.movieService.updateMovie(movieID, createMovieDTO);
    if (!movie) {
      throw new NotFoundException('Movie does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been successfully updated',
      movie,
    });
  }

  // Delete a movie
  @Delete(':movieID')
  async deleteMovie(@Res() res, @Param('movieID') movieID) {
    const movie = await this.movieService.deleteMovie(movieID);
    if (!movie) {
      throw new NotFoundException('Movie does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been deleted',
      movie,
    });
  }
}
