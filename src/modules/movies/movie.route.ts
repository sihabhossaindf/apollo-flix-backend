import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovie);
router.get("/", MovieControllers.getAllMovies);
router.get("/:id", MovieControllers.getSingleMovie);
router.get("/:slug", MovieControllers.getMovieBySlug);
router.put("/:id", MovieControllers.updateMovie);
router.delete("/:id", MovieControllers.deleteMovie);

export const MovieRoutes = router;
