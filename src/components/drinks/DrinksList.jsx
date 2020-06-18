import React from 'react'
import s from './drinks.module.scss'
import DrinksItem from './DrinksItem'

export default function DrinksList({drinks}) {
  return (
    <ul className={s.drinks_list}>{drinks.length &&
      drinks.map((d, i) => (
        <DrinksItem drink={d} key={i} />
      ))
    }</ul>
  )
}
