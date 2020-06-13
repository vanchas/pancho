import React from 'react'
import s from './cabinet.module.scss'

const activeLinkStyle = {
  borderBottom: '2px solid #000'
}

export default function CabinetControl({ component, setVisible }) {

  return (
    <div className={s.cabinet_control}>
      <span style={component === 'about' ? activeLinkStyle : null} onClick={() => setVisible('about')}>ОБЩАЯ ИНФОРМАЦИЯ</span>
      <span style={component === 'history' ? activeLinkStyle : null} onClick={() => setVisible('history')}>ИСТОРИЯ ЗАКАЗОВ</span>
      <span style={component === 'address' ? activeLinkStyle : null} onClick={() => setVisible('address')}>МОИ АДРЕСА</span>
      <span style={component === 'bonus' ? activeLinkStyle : null} onClick={() => setVisible('bonus')}>МОИ БОНУСЫ</span>
    </div>
  )
}
