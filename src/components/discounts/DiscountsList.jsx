import React from 'react'
import DiscountsItem from './DiscountsItem'
import s from './discounts.module.scss'

export default function DiscountsList({ discounts }) {
  return (
    <ul className={s.discount_list}>{discounts.map((d, i) => (
      <DiscountsItem key={i} discount={d} />
    ))}</ul>
  )
}
