import React from 'react'
import Link from 'next/link'
import s from './footer.module.scss'
import Phone from '../../assets/images/signs/phone_light.png';
import Location from '../../assets/images/signs/location_light.png';
import Social from '../../assets/images/signs/social.png';
import AppStore from '../../assets/images/app_store.png';

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_item}>
          <h6 className="text-muted">Меню</h6>
          <ul>
            <li><Link href="/pizza.html"><a>Пицца</a></Link></li>
            <li><Link href="/wok.html"><a>WOK</a></Link></li>
            <li><Link href="/snacks.html"><a>Закуски</a></Link></li>
            <li><Link href="/pasta.html"><a>Паста</a></Link></li>
            <li><Link href="/salad.html"><a>Салаты</a></Link></li>
            <li><Link href="/combo.html"><a>Комбо</a></Link></li>
            <li><Link href="/set.html"><a>Сеты</a></Link></li>
            <li><Link href="/desert.html"><a>Десерты</a></Link></li>
            <li><Link href="/drink.html"><a>Напитки</a></Link></li>
          </ul>
        </div>
        <div className={s.footer_item}>
          <h6 className="text-muted">Панчо</h6>
          <ul>
            <li><Link href="/about.html"><a>О компании</a></Link></li>
            <li><Link href="/"><a>Производство</a></Link></li>
            <li><Link href="/delivery.html"><a>Условия и доставка</a></Link></li>
            <li><Link href="/combo.html"><a>Комбо</a></Link></li>
            <li><Link href="/stocks.html"><a>Акции</a></Link></li>
            <li><Link href="/bonus.html"><a>Бонусная программа</a></Link></li>
            <li><Link href="/contacts.html"><a>Контакты</a></Link></li>
          </ul>
        </div>
        <div className={s.footer_item}>
          <h6 className="text-muted">Звоните для заказа</h6>
          <div>
            <img src={Phone} alt="" />
            <a href="tel:+0950001195" className="btn">095-000-11-95</a>
          </div>
          <h6 className="text-muted">Заходите в гости</h6>
          <div>
            <img src={Location} alt="" />
            <address>Славянск, ул. Шевченко,10</address>
          </div>
        </div>
        <div className={s.footer_item}>
          <div className="pb-2">
            <p className="text-muted">Все акции новости в наших соцсетях</p>
            <img src={Social} alt="" />
          </div>
          <div>
            <p className="text-muted">Закачай наше мобильное приложение</p>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={AppStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
