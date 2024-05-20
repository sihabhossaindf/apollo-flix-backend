import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format } from "date-fns";
import slugify from "slugify";

const createMovie = async (payload: TMovie) => {
  // slug
  const date = format(payload.releaseDate, "dd-MM-yyyy");

  const slug = slugify(`${payload.title}-${date}`, {
    lower: true,
  });

  const result = await Movie.create({ ...payload, slug });
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getSingleMovie = async (id: string) => {
  const result = await Movie.findOne({ id: id });
  return result;
};

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

const updateMovie = async (id: string, updatedData: TMovie) => {
  const result = await Movie.updateOne({ id: id }, updatedData);
  return result;
};

const deleteMovie = async (id: string) => {
  const result = await Movie.deleteOne({ id: id });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  getMovieBySlug,
};
