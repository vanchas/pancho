import React from 'react'
import s from './salad.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'

export default function SaladItem({ salad, addAnOrderItem }) {
  return (
    <li className={s.salad_item}>
      <div className={s.salad_image}>
        <img src={salad.image} alt={salad.name} />
      </div>
      <div className={s.salad_info}>
        <h5 className={s.salad_name}>{salad.name}</h5>
        <small className={s.salad_weight}>{salad.weight} г</small>
        <p>{salad.description}</p>
        <div className={s.salad_btn}>
          <span onClick={(e) => {
            addAnOrderItem(salad)
          }}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.salad_price}>{salad.price} грн</span>
      </div>
    </li>
  )
}
