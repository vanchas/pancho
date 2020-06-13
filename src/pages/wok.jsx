import React from 'react'
import WokVegitableList from '../components/wok/WokVegList'
import WokChickenList from '../components/wok/WokChickenList'
import s from '../components/wok/wok.module.scss'
import Billboard from '../components/billboard/Billboard'

export default function Wok() {
  return (
    <div style={{ maxWidth: '1260px', margin: '0 auto' }} className={s.wok_page}>
      <Billboard />
      <WokVegitableList />
      <WokChickenList />
    </div>
  )
}
