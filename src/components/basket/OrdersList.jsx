import React from 'react'
import OrderItem from './OrderItem'
import s from './orders.module.scss'

export default function OrdersList({ orders }) {
  return (
    <ul className={s.orders_list}>{orders.length &&
      orders.map((o, i) => <OrderItem key={i} order={o} />)
    }</ul>
  )
}
