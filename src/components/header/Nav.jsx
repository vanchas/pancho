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
  NavLink
} from 'reactstrap';
import Phone from '../../assets/images/signs/phone_light.png';
import LoginModal from '../modals/LoginModal'

const NavComponent = props => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" expand="lg" className="py-1" style={{zIndex: '1'}}>
      <NavbarBrand href="tel:+0950001195" className={s.navbar_brand}>
        <img src={Phone} alt="" />
        <span className="btn text-light">095-000-11-95</span>
      </NavbarBrand >
      <NavbarToggler className={s.navbar_toggler} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className={s.collapse} >
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink onClick={toggle} href="/about" className={router.pathname === '/about' ? s.activeLink : 'font-weight-bold'}>О компании Панчо</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} href="/delivery" className={router.pathname === '/delivery' ? s.activeLink : 'font-weight-bold'}>Доставка и оплата</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} href="/discounts" className={router.pathname === '/discounts' ? s.activeLink : 'font-weight-bold'}>Акции</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} href="/bonus" className={router.pathname === '/bonus' ? s.activeLink : 'font-weight-bold'}>Бонусная программа</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} href="/reviews" className={router.pathname === '/reviews' ? s.activeLink : 'font-weight-bold'}>Отзывы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggle} href="/contacts" className={router.pathname === '/contacts' ? s.activeLink : 'font-weight-bold'}>Контакты</NavLink>
          </NavItem>
          <NavItem onClick={toggle} className={s.login_nav_item}>
            <LoginModal buttonLabel="Войти" active={router.pathname === '/cabinet' ? true : false} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavComponent.getInitialProps = async ({ Component, ctx }) => {
  return {}
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
