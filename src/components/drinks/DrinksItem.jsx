import React from 'react'
import s from './drinks.module.scss'
import Basket from '../../assets/images/basket/korzina-01.svg'

export default function DrinksItem({ drink, addAnOrderItem }) {
  return (
    <li className={s.drink_item}>
      <div className={s.drink_image}>
        <img src={drink.image} alt={drink.name} />
      </div>
      <div className={s.drink_info}>
        <h5 className={s.drink_name}>{drink.name}</h5>
        <small className={s.drink_weight}>{drink.weight.M ? drink.weight.M + ' л' : drink.weight + ' л'}</small>
        <p>{drink.description}</p>
        <div className={s.drink_btn}>
          <span onClick={(e) => {
            addAnOrderItem({
              ...drink, price: drink.price.M
            })
          }}>
            <img src={Basket} alt="" />
          В КОРЗИНУ</span>
        </div>
        <span className={s.drink_price}>{drink.price.M ? drink.price.M : drink.price} грн</span>
      </div>
    </li>
  )
}
