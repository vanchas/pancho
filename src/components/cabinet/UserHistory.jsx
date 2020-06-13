import React from 'react'
import s from './cabinet.module.scss'
import Transaction from './Transaction'

export default function UserHistory({ transactions }) {
  return (
    <div className={s.user_history}>
      <ul>
        {(transactions && transactions.length)
          ? transactions.map((t, i) => (
            <li key={i}>
              <Transaction transaction={t} />
            </li>
          )) : null}
      </ul>
    </div>
  )
}
