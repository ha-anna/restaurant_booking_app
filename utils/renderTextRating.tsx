import { Review } from '@prisma/client';
import { calculateReviewAverage } from './calculateReviewAverage';

export const renderTextRating = (reviews: Review[]) => {
  const rating = calculateReviewAverage(reviews);
  if (rating > 4) {
    return 'Awesome';
  } else if (rating > 3) {
    return 'Good';
  } else if (rating > 1) {
    return 'Okay';
  } else {
    return 'No rating';
  }
};
