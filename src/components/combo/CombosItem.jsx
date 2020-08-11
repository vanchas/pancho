import React from 'react'
import s from './combo.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'

export default function CombosItem({ combo, addAnOrderItem }) {
  return (
    <li className={s.combo_item}>
      <div className={s.combo_image}>
        <img src={combo.image} alt={combo.name} />
      </div>
      <div className={s.combo_info}>
        <h5 className={s.combo_name}>{combo.name}</h5>
        <small className={s.combo_weight}>{combo.weight ? combo.weight + ' г' : null}</small>
        <p>{combo.description}</p>
        <div className={s.combo_btn}>
          <span onClick={(e) => {
            addAnOrderItem(combo)
          }}>
            <img src={Basket} alt="" />
          В КОРЗИНУ</span>
        </div>
        <span className={s.combo_price}>{combo.price} грн</span>
      </div>
    </li>
  )
}
