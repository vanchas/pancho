import React from 'react'
import s from './combo.module.scss'
import Basket from '../../assets/images/basket.png'

export default function CombosItem({ combo }) {
  return (
    <li className={s.combo_item}>
      <div className={s.combo_image}>
        <img src={combo.image} alt={combo.name} />
      </div>
      <div className={s.combo_info}>
        <h5 className={s.combo_name}>{combo.name}</h5>
        <small className={s.combo_weight}>{combo.weight} г</small>
        <p>{combo.description}</p>
        <div className={s.combo_btn}>
          <span>
            <img src={Basket} alt="" />
          В КОРЗИНУ</span>
        </div>
        <span className={s.combo_price}>{combo.price} грн</span>
      </div>
    </li>
  )
}
