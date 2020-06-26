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
      <div className="w-100 h-100">
        {/* <img src={MAP} alt="" className={s.map} /> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5892450269225!2d37.59028601567464!3d48.86604257928825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df84ccb610c4df%3A0x173e9ee0872edcf6!2z0L_QtdGALiDQqNC10LLRh9C10L3QutC-LCDQodC70LDQstGP0L3RgdC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4NDEyMg!5e0!3m2!1sru!2sua!4v1592821680195!5m2!1sru!2sua" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" className={s.map}></iframe>
      </div>
    </div>
  )
}
