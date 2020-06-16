import React from 'react'
import s from './contacts.module.scss'
import Phone from '../../assets/images/signs/phone_dark.png'
import Location from '../../assets/images/signs/location_dark.png'
import Clock from '../../assets/images/signs/clock.png'
import MAP from '../../assets/images/map.png'

export default function ContactInfo() {
  return (
    <div className={s.contacts_info}>
      <div>
        <div className="pb-4">
          <span className="h6">Звоните для заказа</span>
          <span>
            <img src={Phone} alt="" className={s.sign} />
            <a href="tel:+0950001195" className="btn text-dark p-0">095-000-11-95</a>
          </span>
        </div>
        <div className="pb-4">
          <span className="h6">Заходите в гости</span>
          <span>
            <img src={Location} alt="" className={s.sign} />
            <address>Славянск, ул. Шевченко,10</address>
          </span>
        </div>
        <div>
          <span className="h6">График работы</span>
          <span>
            <img src={Clock} alt="" className={s.sign} />
            <span>ПН-СБ: 10.00-22.00 &nbsp; ВС: 11.00-22.00</span>
          </span>
        </div>
      </div>
      <div>
        <img src={MAP} alt="" className={s.map} />
      </div>
    </div>
  )
}
