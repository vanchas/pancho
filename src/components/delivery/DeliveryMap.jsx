import React from 'react'
import s from './delivery.module.scss'

export default function DeliveryMap() {
  return (
    <div className={s.delivery_map}>
      <h5 className={`font-weight-bold`}>КАРТА ДОСТАВКИ</h5>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5892450269225!2d37.59028601567464!3d48.86604257928825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df84ccb610c4df%3A0x173e9ee0872edcf6!2z0L_QtdGALiDQqNC10LLRh9C10L3QutC-LCDQodC70LDQstGP0L3RgdC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4NDEyMg!5e0!3m2!1sru!2sua!4v1592821680195!5m2!1sru!2sua" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" className={s.map}></iframe>
      </div>
    </div>
  )
}
