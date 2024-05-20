import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

// create movie
const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);

  res.status(200).json({
    success: true,
    message: "Movie created successfully",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMovies();

  res.status(200).json({
    success: true,
    message: "Movie retrieved successfully",
    data: result,
  });
};

const getSingleMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await MovieServices.getSingleMovie(id);
  res.status(200).json({
    success: true,
    message: "Single Movie retrieved successfully",
    data: result,
  });
};

const getMovieBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  const result = await MovieServices.getMovieBySlug(slug);
  res.status(200).json({
    success: true,
    message: "Movie retrieved by slug successfully",
    data: result,
  });
};

const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await MovieServices.updateMovie(id, updatedData);
  res.status(200).json({
    success: true,
    message: "Movie updated successfully",
    data: updatedData,
  });
};

const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MovieServices.deleteMovie(id);
  res.status(200).json({
    success: true,
    message: "Movie updated successfully",
    data: result,
  });
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  getMovieBySlug,
};
