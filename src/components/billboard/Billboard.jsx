import React from 'react'
import s from './bill.module.scss'
import BillboardImage from '../../assets/images/billboard.png';
import Filter from '../../assets/images/signs/filter_lines.png';
import Search from '../../assets/images/signs/search.png';

export default function Billboard() {
  return (
    <div>
      <div className={s.billboard}>
        <img src={BillboardImage} alt="ДОСТАВЛЯЕМ ВКУСНОЕ УДОВОЛЬСТВИЕ" className="w-100" />
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
