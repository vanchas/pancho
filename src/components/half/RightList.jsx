import React from 'react'
import s from './half.module.scss'
import ListItem from './RightListItem'

export default function RightList({ pizza, setRightHalfPizza }) {

  const setRightHalfPizzaHandler = selectedPizza => {
    setRightHalfPizza(selectedPizza);
  }

  return (
    <div className={s.pizza_list}>
      <ul className={s.right_list}>{pizza.map((p, i) => (
        <li key={i} onClick={() => setRightHalfPizzaHandler(p)}>
          <ListItem pizza={p} />
        </li>
      ))}</ul>
    </div>
  )
}
