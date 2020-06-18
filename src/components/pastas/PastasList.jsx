import React from 'react'
import s from './pasta.module.scss'
import PastasItem from './PastasItem'

export default function PastasList({ pastas }) {
  return (
    <ul className={s.pastas_list}>{pastas.length &&
      pastas.map((p, i) => (
        <PastasItem pasta={p} key={i} />
      ))
    }</ul>
  )
}
