import React from 'react'
import s from './cabinet.module.scss'
import Transaction from './Transaction'

export default function UserHistory({ history, repeatOrder }) {
  return (
    <div className={s.user_history}>
      <ul>
        {(history && history.length)
          ? history.map((t, i) => (
            <li key={i}>
              <Transaction transaction={t} repeatOrder={repeatOrder} />
            </li>
          )) : null}
      </ul>
    </div>
  )
}
