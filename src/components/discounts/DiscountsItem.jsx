import React from 'react'
import s from './discounts.module.scss'

export default function StocksItem({discount}) {
  return (
    <li className={s.discount_item}>
      <img src={discount.image} alt="discount"/>
      <h4>{discount.title}</h4>
      <p>{discount.description}</p>
      <span><u>ПОДРОБНЕЕ</u></span>
    </li>
  )
}
