import React from 'react';
import { Review } from '@prisma/client';
import { calculateReviewAverage } from './calculateReviewAverage';
import {
  MaterialSymbolsStarRoundedFull as StarFull,
  MaterialSymbolsStarOutlineRoundedEmpty as StarEmpty,
  MaterialSymbolsStarOutlineRoundedHalf as StarHalf,
} from '../app/components/StarRating';

export const renderStarRating = (reviews: Review[] | number, num: number) => {
  const rating = num || calculateReviewAverage(reviews);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const difference = parseFloat((rating - i).toFixed(1));
    if (difference >= 1) stars.push(<StarFull />);
    else if (difference >= 0.5 && difference > 0) {
      if (difference <= 0.2) stars.push(<StarEmpty />);
      else if (difference > 0.2 && difference <= 0.6) stars.push(<StarHalf />);
      else stars.push(<StarFull />);
    } else stars.push(<StarEmpty />);
  }
  return stars;
};
