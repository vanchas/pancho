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
import Pizza from '../../assets/images/categories/category_pizza.png';
import Half from '../../assets/images/categories/category_half.png';
import Wok from '../../assets/images/categories/category_wok.png';
import Snack from '../../assets/images/categories/category_snack.png';
import Pasta from '../../assets/images/categories/category_pasta.png';
import Salad from '../../assets/images/categories/category_salad.png';
import Combo from '../../assets/images/categories/category_combo.png';
import Sets from '../../assets/images/categories/category_set.png';
import Desert from '../../assets/images/categories/category_desert.png';
import Drink from '../../assets/images/categories/category_drink.png';

export default function Categories(props) {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" expand="xl" className="py-1">
      <NavbarToggler className={s.navbar_toggler} onClick={toggle} />
      <NavbarBrand className={s.navbar_brand}>
        <p className="m-0">БЕСПЛАТНАЯ ДОСТАВКА ПИЦЦЫ</p>
        <p className="text-muted m-0">Среднее время доставки 55 минут</p>
      </NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/pizza" onClick={() => setActiveLink('pizza')} className={activeLink === 'pizza' ? s.activeLink : null}>
              <img src={Pizza} alt=""/>
              ПИЦЦА</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/half" onClick={() => setActiveLink('half')} className={activeLink === 'half' ? s.activeLink : null}>
              <img src={Half} alt=""/>
              ПОЛОВИНКИ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/wok" onClick={() => setActiveLink('wok')} className={activeLink === 'wok' ? s.activeLink : null}>
              <img src={Wok} alt=""/>
              ВОК</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/snack" onClick={() => setActiveLink('snack')} className={activeLink === 'snack' ? s.activeLink : null}>
              <img src={Snack} alt=""/>
              ЗАКУСКИ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pasta" onClick={() => setActiveLink('pasta')} className={activeLink === 'pasta' ? s.activeLink : null}>
              <img src={Pasta} alt=""/>
              ПАСТА</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/combo" onClick={() => setActiveLink('combo')} className={activeLink === 'combo' ? s.activeLink : null}>
              <img src={Combo} alt=""/>
              КОМБО</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/set" onClick={() => setActiveLink('set')} className={activeLink === 'set' ? s.activeLink : null}>
              <img src={Sets} alt=""/>
              СЕТЫ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/desert" onClick={() => setActiveLink('desert')} className={activeLink === 'desert' ? s.activeLink : null}>
              <img src={Desert} alt=""/>
              ДЕСЕРТЫ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/drink" onClick={() => setActiveLink('drink')} className={activeLink === 'drink' ? s.activeLink : null}>
              <img src={Drink} alt=""/>
              НАПИТКИ</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

Categories.getInitialProps = async ({ Component, ctx }) => {
  return {}
}


Categories.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
