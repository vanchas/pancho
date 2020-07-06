import React from 'react'
import s from './salad.module.scss'
import SaladItem from './SaladItem'

export default function SaladList({ salads, addAnOrderItem }) {
  return (
    <ul className={s.salad_list}>{salads.length &&
      salads.map((s, i) => (
        <SaladItem salad={s} key={i} addAnOrderItem={addAnOrderItem} />
      ))
    }</ul>
  )
}
