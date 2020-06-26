import React from 'react'
import s from './snacks.module.scss';
import Basket from '../../assets/images/basket.png'

export default function SnackItem({ snack, addAnOrderItem }) {
  return (
    <li className={s.snack_item}>
      <div className={s.snack_image}>
        <img src={snack.image} alt={snack.name} />
      </div>
      <div className={s.snack_info}>
        <h5 className={s.snack_name}>{snack.name}</h5>
        <small className={s.snack_weight}>{snack.weight} г</small>
        <p>{snack.description}</p>
        <div className={s.snack_btn}>
          <span onClick={() => {
            addAnOrderItem(snack);
          }}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.snack_price}>{snack.price} грн</span>
      </div>
    </li>
  )
}
