import React from 'react'
import s from './snacks.module.scss';
import SnackItem from './SnackItem';

export default function SnacksList({ snacks }) {
  return (
    <ul className={s.snacks_list}>{snacks.length &&
      snacks.map((s, i) => (
        <SnackItem snack={s} key={i} />
      ))
    }</ul>
  )
}
