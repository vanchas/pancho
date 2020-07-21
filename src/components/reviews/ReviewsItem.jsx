import React, { useState } from 'react'
import s from './reviews.module.scss';
import Like from '../../assets/images/like_green.png'
import Dislike from '../../assets/images/signs/dislike.png'
import { Button, Modal } from 'reactstrap';

export default function ReviewsItem({ review }) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <li className={s.reviews_item}>
      <div className={s.reviews_item_like_image}>
        {review.assessment
          ? <img src={Like} alt="like" />
          : <img src={Dislike} alt="dislike" />}
      </div>
      <div className={s.reviews_item_info}>
        <span className={`font-weight-bold`}>{review.name}</span>
        <span>{review.date}</span>
      </div>
      <p>{review.message}</p>
      <div className={s.reviews_item_photo}>
        {review.photo && <Button color="" onClick={toggle}>
          <img src={review.photo} alt="" />
        </Button>}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <img src={review.photo} alt="" className={s.modal_review_photo} />
      </Modal>
    </li>
  )
}
