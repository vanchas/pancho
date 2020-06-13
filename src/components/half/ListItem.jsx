import React from 'react'
import s from './half.module.scss'

export default function ListItem({pizza}) {
  
  return (
    <div className={s.pizza_card}>
      <img src={pizza.smallImage} alt="" className="w-100" />
      <h3 className="h5 text-center">{pizza.name}</h3>
    </div>
  )
}
