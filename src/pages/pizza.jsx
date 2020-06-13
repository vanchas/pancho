import React from 'react'
import s from '../components/pizza/pizza.module.scss'
import PizzaList from '../components/pizza/PizzaList'
import Billboard from '../components/billboard/Billboard'

export default function Pizza() {
  return (
    <div style={{ maxWidth: '1260px', margin: '0 auto' }} className={s.pizza_page}>
      <Billboard />
      <header>
        <h2>ПИЦЦЫ</h2>
      </header>
      <PizzaList />
    </div>
  )
}
