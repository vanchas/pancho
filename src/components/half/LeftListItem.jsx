import React from 'react'
import s from './half.module.scss'
import { useSelector } from "react-redux";

export default function LeftListItem({pizza}) {
  const selectedPizza = useSelector(({ products }) => products.leftHalfPizza)

  return (
    <div className={`${s.pizza_card} ${
      selectedPizza.id === pizza.id ? s.selected : ''
    }`}>
      <img src={pizza.image} alt={pizza.name} />
      <h3 className="h5 text-center font-weight-bold pt-1">{pizza.name}</h3>
    </div>
  )
}
