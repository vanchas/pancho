import React from 'react'
import s from './desserts.module.scss'
import DessertsItem from '../desserts/DessertsItem'

export default function DessertsList({ desserts }) {
  return (
    <ul className={s.desserts_list}>{desserts.length &&
      desserts.map((d, i) => (
        <DessertsItem dessert={d} key={i} />
      ))
    }</ul>
  )
}
