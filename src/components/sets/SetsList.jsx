import React from 'react'
import s from './sets.module.scss'
import SetsItem from './SetsItem'

export default function SetsList({ sets }) {
  return (
    <ul className={s.sets_list}>{sets.length &&
      sets.map((e, i) => (
        <SetsItem set={e} key={i} />
      ))
    }</ul>
  )
}
