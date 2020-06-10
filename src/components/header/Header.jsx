import React from 'react'
import Nav from './Nav';
import HeaderInfoBlock from './HeaderInfoBlock';
import s from './header.module.scss';
import Categories from './Categories';
import Billboard from '../../assets/images/billboard.png';
import Filter from '../../assets/images/signs/filter_lines.png';
import Search from '../../assets/images/signs/search.png';

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
      <div className={s.billboard}>
        <img src={Billboard} alt="ДОСТАВЛЯЕМ ВКУСНОЕ УДОВОЛЬСТВИЕ" className="w-100" />
      </div>
      <div className={s.search_control}>
        <div>
          <img src={Search} alt="" />
          <span>поиск по меню</span>
        </div>
        <div>
          <img src={Filter} alt="" />
          <span>фильтр</span>
        </div>
      </div>
    </div>
  )
}
