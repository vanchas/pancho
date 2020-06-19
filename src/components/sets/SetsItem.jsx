import React from 'react'
import s from './sets.module.scss'
import Basket from '../../assets/images/basket.png'

export default function SetsItem({ set, addAnOrderItem }) {
  return (
    <li className={s.set_item}>
      <div className={s.set_image}>
        <img src={set.image} alt={set.name} />
      </div>
      <div className={s.set_info}>
        <h5 className={s.set_name}>{set.name}</h5>
        <small className={s.set_weight}>{set.weight} г</small>
        <p>{set.description}</p>
        <div className={s.set_btn}>
          <span onClick={() => addAnOrderItem(set)}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.set_price}>{set.price} грн</span>
      </div>
    </li>
  )
}
