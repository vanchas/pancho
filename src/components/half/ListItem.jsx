import React from 'react'
import s from './half.module.scss'

export default function ListItem({pizza}) {
  
  return (
    <div className={s.pizza_card}>
      <img src={pizza.smallImage} alt={pizza.name} />
      <h3 className="h5 text-center font-weight-bold pt-1">{pizza.name}</h3>
    </div>
  )
}
