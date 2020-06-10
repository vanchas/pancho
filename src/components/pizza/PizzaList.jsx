import React, { useState } from 'react'
import PizzaCard from './PizzaCard'
import s from './pizza.module.scss'
import p1 from '../../assets/images/pizzas/pizza_1.png'
import p2 from '../../assets/images/pizzas/pizza_2.png'
import p3 from '../../assets/images/pizzas/pizza_3.png'
import p4 from '../../assets/images/pizzas/pizza_4.png'

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([p1, p2, p3, p4, p3, p4, p2, p1]);

  return (
    <ul className={s.pizzas_list}>
      {pizzas.map((p, i) => (
        <li key={i}><PizzaCard image={p} /></li>
      ))}
    </ul>
  )
}
