import React from 'react'
import s from './cabinet.module.scss'

export default function UserAddress({ addresses }) {
  return (
    <div className={s.user_address}>
      <h5>АДРЕСА ДОСТАВКИ</h5>
      <ul>
        {addresses.map((a, i) => (
          <li key={i}>{i}. г.{a.city}, ул.{a.street}, под.{a.corpus}, кв.{a.flat}</li>
        ))}
      </ul>
      <form>
        <label className="form-group">
          АДРЕС*
          <input type="text" required className="form-control" />
        </label>
        <div className={s.input_group}>
          <label className="form-group">
            №ДОМ*
            <input type="text" required className="form-control" />
          </label>
          <label className="form-group">
            ЭТАЖ
            <input type="text" className="form-control" />
          </label>
          <label className="form-group">
            № КВ.
            <input type="text" className="form-control" />
          </label>
        </div>
        <div className={s.button_block}>
          <div></div>
          <button className="btn" type="submit">
            ДОБАВИТЬ НОВЫЙ АДРЕС ДОСТАВКИ
          </button>
        </div>
      </form>
    </div>
  )
}
