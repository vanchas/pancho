import React from 'react'
import s from './pasta.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'

export default function PastasItem({ pasta, addAnOrderItem }) {
  return (
    <li className={s.pasta_item}>
      <div className={s.pasta_image}>
        <img src={pasta.image} alt={pasta.name} />
      </div>
      <div className={s.pasta_info}>
        <h5 className={s.pasta_name}>{pasta.name}</h5>
        <small className={s.pasta_weight}>{pasta.weight} г</small>
        <p>{pasta.description}</p>
        <div className={s.pasta_btn}>
          <span onClick={(e) => {
            addAnOrderItem(pasta)
          }}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.pasta_price}>{pasta.price} грн</span>
      </div>
    </li>
  )
}
