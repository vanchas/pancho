import React, { useState } from 'react'
import WokCard from './WokCard'
import s from './wok.module.scss'
import w1 from '../../assets/images/woks/wok.png'

export default function WokChickenList() {
  const [woks, setWoks] = useState([w1, w1, w1, w1]);

  return (
    <div>
      <h2 className={s.wok_list_heading}>ВОК С КУРИЦЕЙ</h2>
      <ul className={s.wok_list}>
        {woks.map((p, i) => (
          <li key={i}><WokCard image={p} /></li>
        ))}
      </ul>
    </div>
  )
}
