export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  id: string;
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  isDeleted?: boolean;
  viewCount: number;
  slug: string;
  reviews: [TReview];
};
