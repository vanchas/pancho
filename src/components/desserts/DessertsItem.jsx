import React from 'react'
import s from './desserts.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'

export default function DessertsItem({ dessert, addAnOrderItem }) {
  return (
    <li className={s.dessert_item}>
      <div className={s.dessert_image}>
        <img src={dessert.image} alt={dessert.name} />
      </div>
      <div className={s.dessert_info}>
        <h5 className={s.dessert_name}>{dessert.name}</h5>
        <small className={s.dessert_weight}>{dessert.weight} г</small>
        <p>{dessert.description}</p>
        <div className={s.dessert_btn}>
          <span onClick={(e) => {
            addAnOrderItem(dessert)
          }}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.dessert_price}>{dessert.price} грн</span>
      </div>
    </li>
  )
}
