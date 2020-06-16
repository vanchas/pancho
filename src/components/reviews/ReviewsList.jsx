import React, { useState, useEffect } from 'react'
import s from './reviews.module.scss';
import ReviewsItem from './ReviewsItem';

export default function ReviewsList({ reviews }) {
  const [postsCount, setPostsCount] = useState(3);
  const [showFullList, setShowFullList] = useState(false);

  const showFullListHandler = () => {
    setPostsCount(reviews.length);
    setShowFullList(!showFullList);
  }

  return (
    <div>
      {reviews && reviews.length ?
        <ul className={s.reviews_list}>
          {reviews.map((r, i) => {
            if (i < postsCount) {
              return <ReviewsItem key={i} review={r} />
            }
          })}
        </ul> : null}
      {!showFullList && <span className={s.show_full_list_btn} onClick={showFullListHandler}>ПОКАЗАТЬ ЕЩЕ</span>}
    </div>
  )
}
