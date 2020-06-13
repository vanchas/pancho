import React from 'react'
import s from './half.module.scss'
import ListItem from './ListItem'

export default function LeftList({ pizza, setLeftHalfPizza }) { 

  const setLeftHalfPizzaHandler = selectedPizza => {
    setLeftHalfPizza(selectedPizza);
  }

  return (
    <div className={s.pizza_list}>
      <ul>{pizza.map((p, i) => (
        <li key={i} onClick={() => setLeftHalfPizzaHandler(p)}>
          <ListItem pizza={p} />
        </li>
      ))}</ul>
    </div>
  )
}
