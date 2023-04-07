import { Review } from '@prisma/client';
import { calculateReviewAverage } from './calculateReviewAverage';

export const renderTextRating = (reviews: Review[]) => {
  const rating = calculateReviewAverage(reviews);
  if (rating <= 4 && rating > 3) {
    return 'Awesome';
  } else if (rating <= 3 && rating > 2) {
    return 'Good';
  } else if (rating <= 2 && rating > 1) {
    return 'Okay';
  } else {
    return 'No rating';
  }
};
