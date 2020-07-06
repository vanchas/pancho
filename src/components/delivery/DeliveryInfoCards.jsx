import React from 'react'
import s from './delivery.module.scss'
import Clock from '../../assets/images/delivery/clock.png'
import Burger from '../../assets/images/delivery/burger.png'
import Card from '../../assets/images/delivery/card.png'
import Curier from '../../assets/images/delivery/curier.png'
import House from '../../assets/images/delivery/house.png'
import Visa from '../../assets/images/delivery/visa.png'

const cards = [
  { image: Burger, text: 'Время работы доставки: понедельник-суббота 10.00 до 22.00, воскресенье 11 до 22.00', title: 'РЕЖИМ РАБОТЫ', visaImage: null, subtext: null },
  { image: Clock, text: 'Среднее время доставки составляет 55 минут. Более точное время нужно уточнять у менеджера при заказе.', title: 'ВРЕМЯ ДОСТАВКИ', visaImage: null, subtext: null },
  { image: null, text: 'Среднее время доставки составляет 55 минут. Более точное время нужно уточнять у менеджера при заказе.', title: 'БЕСПЛАТНАЯ ДОСТАВКА', visaImage: null, subtext: null, imageText: 'FREE' },
  { image: Card, text: null, title: 'ОПЛАТА НА САЙТЕ ', visaImage: Visa, subtext: 'Банковской картой' },
  { image: Curier, text: 'Наличными', title: 'ОПЛАТА КУРЬЕРУ', visaImage: Visa, subtext: 'Банковской картой' },
  { image: House, text: 'Наличными', title: 'ОПЛАТА САМОВЫВОЗОМ', visaImage: Visa, subtext: 'Банковской картой' }
];


export default function DeliveryInfoCards() {
  return (
    <div className={s.deilvery_cards}>
      <ul>
        {cards.map((c, i) => (
          <li key={i}>
            <div>
              <img src={c.image} alt="" />
              {c.imageText && <span className="h3 font-weight-bold" style={{ transform: 'translateY(-30%)' }}>{c.imageText}</span>}
            </div>
            <div>
              <h6>{c.title}</h6>
              <p>{c.text}</p>
              {c.subtext && <p>{c.subtext}
                <img src={c.visaImage} alt="" className={s.visa} />
              </p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
