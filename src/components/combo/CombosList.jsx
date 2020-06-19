import React from 'react'
import s from './combo.module.scss'
import CombosItem from './CombosItem'

export default function CombosList({ combos, addAnOrderItem }) {
  return (
    <ul className={s.combos_list}>{combos.length &&
      combos.map((c, i) => (
        <CombosItem combo={c} key={i} addAnOrderItem={addAnOrderItem} />
      ))
    }</ul>
  )
}
