import React from 'react'
import s from './wok.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'
import { useDispatch } from 'react-redux'

export default function WokCard({ wok, addAnOrderItem }) {
  const dispatch = useDispatch();

  return (
    <div className={`${s.card} card border-0`}>
      <img className={s.wok_image} src={wok.image} alt={wok.name} />
      <div className={s.card_body}>
        <h5 className={`${s.card_title}`}>
          {wok.name}
          <small className="text-muted">{wok.weight}г +- 20г</small>
        </h5>
        <p className={s.card_text}>{wok.description}</p>
        <div className={`d-flex justify-content-between`}>
          <button className={`${s.basket} btn`}
            onClick={() => {
              dispatch(addAnOrderItem(wok));
            }} >
            <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          <span className="font-weight-bold h5">{wok.price} грн</span>
        </div>
      </div>
    </div>
  )
}
