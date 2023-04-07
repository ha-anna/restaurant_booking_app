import React from 'react';
import { Review } from '@prisma/client';
import { calculateReviewAverage } from './calculateReviewAverage';
import {
  MaterialSymbolsStarRounded as StarFull,
  MaterialSymbolsStarOutlineRounded as StarEmpty,
} from '../app/components/StarRating';

export const renderStarRating = (reviews: Review[] | number, num: number) => {
  const rating = calculateReviewAverage(reviews) || num;
  if (rating > 3) {
    return (
      <span>
        <StarFull />
        <StarFull />
        <StarFull />
      </span>
    );
  } else if (rating <= 3 && rating > 2) {
    return (
      <span>
        <StarFull />
        <StarFull />
      </span>
    );
  } else if (rating <= 2 && rating > 1) {
    return (
      <span>
        <StarFull />
      </span>
    );
  } else {
    return (
      <span>
        <StarEmpty />
      </span>
    );
  }
};
