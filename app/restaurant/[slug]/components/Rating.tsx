import React from 'react';
import { renderStarRating } from '../../../../utils/renderStarRating';
import { Review } from '@prisma/client';
import { calculateReviewAverage } from '../../../../utils/calculateReviewAverage';

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>{renderStarRating(reviews, 0)}</p>
        <p className="text-reg ml-3">
          {calculateReviewAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}
