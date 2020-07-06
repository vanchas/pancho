import React, { useState, useEffect } from 'react'
import s from './discounts.module.scss'
import $ from 'jquery'

export default function StocksItem({ discount, index }) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!showMore) $(`.full-text${index}`).hide();
  }, [])

  const showText = () => {
    setShowMore(!showMore);
    $(`.full-text${index}`).slideToggle();
  }

  return (
    <li className={s.discount_item}>
      <img src={discount.image} alt="discount" />
      <h4>{discount.title}</h4>
      <p>{discount.description.split('~~')[0]} {!showMore && '...'}</p>
      <p className={`full-text${index}`}>{discount.description.split('~~')[1]}</p>
      <span onClick={showText}><u>
        {showMore ? 'Свернуть' : 'Подробнее...'}
      </u></span>
    </li>
  )
}
