import React from 'react'
import Link from 'next/link'
import s from './footer.module.scss'
import Phone from '../../assets/images/signs/phone-01.svg';
import Location from '../../assets/images/signs/point-01.svg';
import Social from '../../assets/images/signs/social.png';
import AppStore from '../../assets/images/app_store.png';
import GooglePlay from '../../assets/images/google.png';
import { connect } from "react-redux";

function Footer({headerSelectPhone, address}) {
  return (
    <div className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_item}>
          <h6 className="">Меню</h6>
          <ul>
            <li><Link href="/pizza"><a>Пицца</a></Link></li>
            <li><Link href="/wok"><a>WOK</a></Link></li>
            <li><Link href="/snacks"><a>Закуски</a></Link></li>
            <li><Link href="/pasta"><a>Паста</a></Link></li>
            <li><Link href="/salad"><a>Салаты</a></Link></li>
            <li><Link href="/combo"><a>Комбо</a></Link></li>
            <li><Link href="/set"><a>Сеты</a></Link></li>
            <li><Link href="/desert"><a>Десерты</a></Link></li>
            <li><Link href="/drink"><a>Напитки</a></Link></li>
          </ul>
        </div>
        <div className={s.footer_item}>
          <h6 className="">Панчо</h6>
          <ul>
            <li><Link href="/about"><a>О компании</a></Link></li>
            <li><Link href="/"><a>Производство</a></Link></li>
            <li><Link href="/delivery"><a>Условия и доставка</a></Link></li>
            <li><Link href="/combo"><a>Комбо</a></Link></li>
            <li><Link href="/stocks"><a>Акции</a></Link></li>
            <li><Link href="/bonus"><a>Бонусная программа</a></Link></li>
            <li><Link href="/contacts"><a>Контакты</a></Link></li>
          </ul>
        </div>
        <div className={s.footer_item}>
          <h6 className="">Звоните для заказа</h6>
          <div className="d-flex align-items-center">
            <img src={Phone} alt="" className={s.sign} />
            <a href={`tel:+${headerSelectPhone}`} className={`${s.phone} btn`}>{headerSelectPhone}</a>
          </div>
          <h6 className="">Заходите в гости</h6>
          <div className="d-flex align-items-center">
            <img src={Location} alt="" className={s.sign} />
            <address>{address}</address>
          </div>
        </div>
        <div className={s.footer_item}>
          <div className="pb-2">
            <p className="">Все акции новости в наших соцсетях</p>
            <img src={Social} alt="" />
          </div>
          <div>
            <p className="">Закачай наше мобильное приложение</p>
            <div className={`pr-2`}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={AppStore} alt="Apple Store" />
                <img src={GooglePlay} alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateTopProps = state => ({
  headerSelectPhone: state.user.headerSelectPhone,
  address: state.user.cafeAddress
})
export default connect(mapStateTopProps, null)(Footer)
