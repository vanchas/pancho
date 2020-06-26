import React from 'react'
import s from './header.module.scss';
import Brand from '../../assets/images/brand.png';
import Clock from '../../assets/images/signs/clock.png';
import Location from '../../assets/images/signs/location_dark.png';
import Phone from '../../assets/images/signs/phone_dark.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HeaderInfoBlock() {
  const router = useRouter();

  return (
    <div className={s.header_info_block}>
      <div className={s.header_info_block_item}>
        <Link href="/"><a>
          <img src={Brand} alt="Pancho" className="w-100" />
        </a></Link>
      </div>
      <div className={s.header_info_block_item}>
        <h3 className="h6 font-weight-bold">БЕСПЛАТНАЯ ДОСТАВКА ПИЦЦЫ</h3>
        <p>Среднее время доставки 55 минут</p>
      </div>
      <div className={s.header_info_block_item}>
        <img src={Clock} alt="" />
        <p>ПН-СБ &nbsp; 11.00-22.00</p>
        <p>ВС &nbsp; 12.00-22.00</p>
      </div>
      <div className={s.header_info_block_item}>
        <img src={Location} alt="" />
        <p>Ваш город</p>
        <select>
          <option value="default" hidden>СЛАВЯНСК</option>
        </select>
      </div>
      <div className={s.header_info_block_item}>
        <img src={Phone} alt="" />
        <a href="tel:+0950001195" className="btn">095-000-11-95</a>
      </div>
    </div>
  )
}
