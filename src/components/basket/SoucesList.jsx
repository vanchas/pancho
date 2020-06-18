import React from 'react'
import s from './orders.module.scss'

export default function SoucesLIst({ souces }) {
  return (
    <div>{souces.length ? <>
      <h5 className={s.souces_heading}>СОУСЫ</h5>
      <ul className={s.souces_list}>
        {souces.map((souce, i) => (
          <li key={i}>
          <div className={s.souce_image}>
            <img src={souce.image} alt={souce.name} />
          </div>
          <span className={s.souce_price}>{souce.price} грн</span>
          <span className={s.souce_name}>{souce.name}</span>
          <div className={s.to_basket_btn}>
            <span> В КОРЗИНУ</span>
          </div>
        </li>
        ))}
      </ul>
    </> : null}
    </div>
  )
}
