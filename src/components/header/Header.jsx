import React from 'react'
import Nav from './Nav';
import HeaderInfoBlock from './HeaderInfoBlock';
import s from './header.module.scss';
import Categories from './Categories';s

export default function Header() {
  return (
    <div>
      <div className={s.navbar_container}>
        <Nav />
      </div>
      <HeaderInfoBlock />
      <div className={s.header_categories_block}>
        <Categories />
      </div>
    </div>
  )
}
