import React from 'react'
import s from './wok.module.scss'
import Basket from '../../assets/images/basket.png'

export default function WokCard({ image, name, description, price, weight }) {
  return (
    <div className={`${s.card} card border-0`}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className={`${s.card_title} card-title`}>
          {name}
          <small className="text-muted">{weight}г +- 20г</small>
        </h5>
        <p className={s.card_text}>{description}</p>
        <div className={`d-flex justify-content-between`}>
          <button className={`${s.basket} btn`}>
            <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          <span className="font-weight-bold h5">{price} грн</span>
        </div>
      </div>
    </div>
  )
}
