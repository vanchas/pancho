import React, { useState, useEffect } from 'react';
import s from './header.module.scss';
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
  const [activeLink, setActiveLink] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" expand="lg" className="py-1">
      <NavbarBrand className={s.navbar_brand}>
        <img src={Phone} alt="" />
        <a href="tel:+0950001195" className="btn">095-000-11-95</a>
      </NavbarBrand >
      <NavbarToggler className={s.navbar_toggler} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/" onClick={() => setActiveLink('about')} className={activeLink === 'about' ? s.activeLink : null}>О компании Панчо</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/delivery" onClick={() => setActiveLink('delivery')} className={activeLink === 'delivery' ? s.activeLink : null}>Доставка и оплата</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stocks" onClick={() => setActiveLink('stocks')} className={activeLink === 'stocks' ? s.activeLink : null}>Акции</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bonus" onClick={() => setActiveLink('bonus')} className={activeLink === 'bonus' ? s.activeLink : null}>Бонусная программа</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/reviews" onClick={() => setActiveLink('reviews')} className={activeLink === 'reviews' ? s.activeLink : null}>Отзывы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contacts" onClick={() => setActiveLink('contacts')} className={activeLink === 'contacts' ? s.activeLink : null}>Контакты</NavLink>
          </NavItem>
          <NavItem className={s.login_nav_item}>
            <NavLink href="/login" onClick={() => setActiveLink('login')} className={activeLink === 'login' ? s.activeLink : null}>Войти</NavLink>
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
