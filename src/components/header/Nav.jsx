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

const NavComponent = props => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" expand="lg" className="py-1">
      <NavbarBrand href="tel:+0950001195" className={s.navbar_brand}>
        <img src={Phone} alt="" />
        <span className="btn text-light">095-000-11-95</span>
      </NavbarBrand >
      <NavbarToggler className={s.navbar_toggler} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/about" onClick={() => setActiveLink('about')} className={router.pathname === '/about' ? s.activeLink : null}>О компании Панчо</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/delivery" onClick={() => setActiveLink('delivery')} className={router.pathname === '/delivery' ? s.activeLink : null}>Доставка и оплата</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stocks" onClick={() => setActiveLink('stocks')} className={router.pathname === '/stocks' ? s.activeLink : null}>Акции</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bonus" onClick={() => setActiveLink('bonus')} className={router.pathname === '/bonus' ? s.activeLink : null}>Бонусная программа</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/reviews" onClick={() => setActiveLink('reviews')} className={router.pathname === '/reviews' ? s.activeLink : null}>Отзывы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contacts" onClick={() => setActiveLink('contacts')} className={router.pathname === '/contacts' ? s.activeLink : null}>Контакты</NavLink>
          </NavItem>
          <NavItem className={s.login_nav_item}>
            <NavLink href="/cabinet" onClick={() => setActiveLink('cabinet')} className={router.pathname === '/cabinet' ? s.activeLink : null}>Войти</NavLink>
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
