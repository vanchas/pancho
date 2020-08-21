import React, { useState, useEffect } from 'react';
import s from './header.module.scss';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Phone from '../../assets/images/signs/phone_light.png';
import LoginModal from '../modals/LoginModal'
import Link from "next/link";

const links = [
  {path: '/', name: 'О компании Панчо'},
  {path: 'delivery', name: 'Доставка и оплата'},
  {path: 'discounts', name: 'Акции'},
  {path: 'bonus', name: 'Бонусная программа'},
  {path: 'reviews', name: 'Отзывы'},
  {path: 'contacts', name: 'Контакты'}
]

const NavComponent = props => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    if (window && window.innerWidth < 992) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <Navbar color="" expand="lg" className="py-1" style={{zIndex: '1', maxWidth: '1667px', margin: 'auto'}}>
      <NavbarBrand href="tel:+0950001195" className={`ml-3 ${s.navbar_brand}`}>
        <img src={Phone} alt="" />
        <span className="btn text-light">095-000-11-95</span>
      </NavbarBrand >
      <NavbarToggler className={`mr-3 ${s.navbar_toggler}`} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className={s.collapse} >
        <Nav className={`mr-auto ${s.nav_list}`} navbar>
          {links.map((l, i) => (
            <NavItem key={i}>
              <Link href={l.path}>
                <a onClick={toggle} className={'nav-link' + router.pathname === l.path ? s.activeLink : 'font-weight-bold'}>{l.name}</a>
              </Link>
            </NavItem>
          ))}
          <NavItem onClick={toggle} className={s.login_nav_item}>
            <LoginModal buttonLabel={router.pathname === '/cabinet' ? "Выйти" : "Войти"} active={router.pathname === '/cabinet' ? true : false} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavComponent.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default NavComponent;
