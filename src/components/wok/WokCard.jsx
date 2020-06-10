import React, { useState } from 'react'
import s from './wok.module.scss'
import Person from '../../assets/images/person.png'
import Basket from '../../assets/images/basket.png'
import Pepper from '../../assets/images/pepper.png'
import Green from '../../assets/images/green.png'

export default function WokCard({ image }) {
  const [activeBtn, setActiveBtn] = useState(3);

  return (
    <div className={`${s.card} card border-0`}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className={`${s.card_title} card-title`}>
          Фунчоза
          <small className="text-muted">380г +- 20г</small>
        </h5>
        <p className={s.card_text}>Пшеничная лапша, брокколи, морковка, грибы, пекинская капуста, кунжут</p>
        <div className={`d-flex justify-content-between`}>
          <button className={`${s.basket} btn`}>
            <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          <span className="font-weight-bold h5">180 грн</span>
        </div>
      </div>
    </div>
  )
}
