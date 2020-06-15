import React from 'react'
import WokCard from './WokCard'
import s from './wok.module.scss'

export default function WokVegitableList({ wok }) {
  return (
    <div>
      <h2 className={s.wok_list_heading}>ВОК С ОВОЩАМИ</h2>
      <ul className={s.wok_list}>
        {wok.length && wok.map((w, i) => (
          <li key={i}><WokCard image={w.image} name={w.name} description={w.description} price={w.price} weight={w.weight} /></li>
        ))}
      </ul>
    </div>
  )
}
