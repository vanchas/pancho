import React from 'react'
import s from './delivery.module.scss'
import Map from '../../assets/images/map.png'

export default function DeliveryMap() {
  return (
    <div className={s.delivery_map}>
      <h5>КАРТА ДОСТАВКИ</h5>
      <div>
        <img src={Map} alt="map"/>
      </div>
    </div>
  )
}
