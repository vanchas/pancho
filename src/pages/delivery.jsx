import React from 'react'
import s from '../components/delivery/delivery.module.scss'
import DeliveryInfoCards from '../components/delivery/DeliveryInfoCards';
import DeliveryMap from '../components/delivery/DeliveryMap';

export default function Delivery() {
  return (
    <div className={s.delivery_page}>
      <h3 className={s.delivery_page_heading}>Доставка и оплата</h3>
      <DeliveryInfoCards />
      <DeliveryMap />
    </div>
  )
}
