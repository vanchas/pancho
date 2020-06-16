import React from 'react'
import s from './reviews.module.scss';
import Like from '../../assets/images/like_green.png'

export default function ReviewsItem({ review }) {
  return (
    <li className={s.reviews_item}>
      <div className={s.reviews_item_like_image}>
        <img src={Like} alt="like" />
      </div>
      <div className={s.reviews_item_info}>
        <span>{review.name}</span>
        <span>{review.date}</span>
      </div>
      <p>{review.message}</p>
      <div className={s.reviews_item_photo}>
        {review.photo && <img src={review.photo} alt="" />}
      </div>
    </li>
  )
}
