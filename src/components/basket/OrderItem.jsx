import React from 'react'
import s from './orders.module.scss'

export default function OrderItem({ order }) {
  return (
    <li className={s.order_item}>
      <div className={s.order_item_image}>
        <img src={order.image} alt={order.name} />
      </div>
      <span className={s.order_item_name}>{order.name} {order.size}</span>
      <div className={s.order_item_count_control}>
        <div>-</div>
        <span>{order.number}</span>
        <div>+</div>
      </div>
      <span className={s.order_item_price}>{order.price} грн</span>
      <span className={s.order_item_remove}>x</span>
    </li>
  )
}
