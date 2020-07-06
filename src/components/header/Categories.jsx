import React, { useState, useEffect } from 'react';
import s from './header.module.scss';
import { useRouter } from 'next/router';
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
import Dessert from '../../assets/images/categories/category_desert.png';
import Drink from '../../assets/images/categories/category_drink.png';

import YelDesserts from '../../assets/images/yellow-categories/dessert.png';
import YelCombo from '../../assets/images/yellow-categories/combo.png';
import YelDrinks from '../../assets/images/yellow-categories/drink.png';
import YelPasta from '../../assets/images/yellow-categories/pasta.png';
import YelPizza from '../../assets/images/yellow-categories/pizza.png';
import YelHalf from '../../assets/images/yellow-categories/half.png';
import YelSalads from '../../assets/images/yellow-categories/salad.png';
import YelSets from '../../assets/images/yellow-categories/set.png';
import YelWok from '../../assets/images/yellow-categories/wok.png';
import YelSnaks from '../../assets/images/yellow-categories/snack.png';

export default function Categories(props) {
  const router = useRouter();
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
            <NavLink href="/pizza" onClick={() => setActiveLink('pizza')} className={router.pathname === '/pizza' ? s.activeLink : null}>
              {router.pathname === '/pizza'
                ? <img src={YelPizza} alt="" />
                : <img src={Pizza} alt="" />}
              ПИЦЦА</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/half" onClick={() => setActiveLink('half')} className={router.pathname === '/half' ? s.activeLink : null}>
              {router.pathname === '/half'
                ? <img src={YelHalf} alt="" />
                : <img src={Half} alt="" />}
              ПОЛОВИНКИ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/wok" onClick={() => setActiveLink('wok')} className={s.navLink}>
              {router.pathname === '/wok'
                ? <img src={YelWok} alt="" />
                : <img src={Wok} alt="" />}
              ВОК</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/snacks" onClick={() => setActiveLink('snacks')} className={s.navLink}>
              {router.pathname === '/snacks'
                ? <img src={YelSnaks} alt="" />
                : <img src={Snack} alt="" />}
              ЗАКУСКИ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pasta" onClick={() => setActiveLink('pasta')} className={s.navLink}>
              {router.pathname === '/pasta'
                ? <img src={YelPasta} alt="" />
                : <img src={Pasta} alt="" />}
              ПАСТА</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/salad" onClick={() => setActiveLink('salad')} className={s.navLink}>
              {router.pathname === '/salad'
                ? <img src={YelSalads} alt="" />
                : <img src={Salad} alt="" />}
              CAЛATЫ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/combo" onClick={() => setActiveLink('combo')} className={s.navLink}>
              {router.pathname === '/combo'
                ? <img src={YelCombo} alt="" />
                : <img src={Combo} alt="" />}
              КОМБО</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sets" onClick={() => setActiveLink('sets')} className={s.navLink}>
              {router.pathname === '/sets'
                ? <img src={YelSets} alt="" />
                : <img src={Sets} alt="" />}
              СЕТЫ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/desserts" onClick={() => setActiveLink('desserts')} className={s.navLink}>
              {router.pathname === '/desserts'
                ? <img src={YelDesserts} alt="" />
                : <img src={Dessert} alt="" />}
              ДЕСЕРТЫ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/drinks" onClick={() => setActiveLink('drinks')} className={s.navLink}>
              {router.pathname === '/drinks'
                ? <img src={YelDrinks} alt="" />
                : <img src={Drink} alt="" />}
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
