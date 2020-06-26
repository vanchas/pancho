import React from 'react'
import s from './cabinet.module.scss'

export default function Transaction({ transaction, repeatOrder }) {
  return (
    <div className={s.transaction}>
      <table>
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>№заказа</th>
            <th>Наименование меню</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{transaction.date} <br />
              {transaction.time}</td>
            <td>{transaction.id}</td>
            <td>{transaction.items.map((t, i) => (
              <React.Fragment key={i}>
                {t.name} {t.size} cm, {t.counter} шт. <br />
              </React.Fragment>
            ))}</td>
            <td>{transaction.address}</td>
            <td>{transaction.phone}</td>
            <td>{transaction.amount} грн</td>
            <td><button className="btn" onClick={() => repeatOrder(transaction.id)}>
              ПОВТОРИТЬ ЗАКАЗ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
