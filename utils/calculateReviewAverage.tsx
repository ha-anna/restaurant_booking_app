import { Review } from '@prisma/client';
export const calculateReviewAverage = (reviews: Review[] | number) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
