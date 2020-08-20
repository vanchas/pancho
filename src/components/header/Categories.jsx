import React, { useEffect, useRef, useState } from "react";
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
import YelSnacks from '../../assets/images/yellow-categories/snack.png';
import $ from 'jquery'

export default function Categories(props) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const $ref = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      makeComponentSticky()
    })
  }, [])

  const toggle = () => setIsOpen(!isOpen);

  const linkClickHandler = (ref) => {
      setActiveLink(ref)
      if (window.innerWidth <= 1200) toggle()
  }

  const makeComponentSticky = () => {
    if (window.scrollY > 250) {
      $($ref.current).addClass('sticky_element')
    } else {
      $($ref.current).removeClass('sticky_element')
    }
  }

  return (
    <div ref={$ref} className={s.categories_wrap}>
      <div className={s.categories_wrap_inner}>
        <Navbar color="" expand="xl" className="py-1">
          <NavbarToggler className={s.navbar_toggler} onClick={toggle} />
          <NavbarBrand className={s.navbar_brand}>
            <p className="my-0 mx-auto font-weight-bold">БЕСПЛАТНАЯ ДОСТАВКА ПИЦЦЫ</p>
            <p className="text-muted mx-auto my-0">Среднее время доставки 55 минут</p>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/pizza" onClick={() => linkClickHandler('pizza')} className={router.pathname === '/pizza' ? s.activeLink : null}>
                  {router.pathname === '/pizza'
                    ? <img src={YelPizza} alt="" />
                    : <img src={Pizza} alt="" />}
                 <span className={`text-center`}> ПИЦЦА</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/half" onClick={() => linkClickHandler('half')} className={router.pathname === '/half' ? s.activeLink : null}>
                  {router.pathname === '/half'
                    ? <img src={YelHalf} alt="" />
                    : <img src={Half} alt="" />}
                 <span className={`text-center`}> ПОЛОВИНКИ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/wok" onClick={() => linkClickHandler('wok')} className={router.pathname === '/wok' ? s.activeLink : null}>
                  {router.pathname === '/wok'
                    ? <img src={YelWok} alt="" />
                    : <img src={c} alt="" />}
                 <span className={`text-center`}> ВОК</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pasta" onClick={() => linkClickHandler('pasta')} className={router.pathname === '/pasta' ? s.activeLink : null}>
                  {router.pathname === '/pasta'
                    ? <img src={YelPasta} alt="" />
                    : <img src={Pasta} alt="" />}
                 <span className={`text-center`}> ПАСТА</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/salad" onClick={() => linkClickHandler('salad')} className={router.pathname === '/salad' ? s.activeLink : null}>
                  {router.pathname === '/salad'
                    ? <img src={YelSalads} alt="" />
                    : <img src={Salad} alt="" />}
                 <span className={`text-center`}> CAЛATЫ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/snacks" onClick={() => linkClickHandler('snacks')} className={router.pathname === '/snacks' ? s.activeLink : null}>
                  {router.pathname === '/snacks'
                    ? <img src={YelSnacks} alt="" />
                    : <img src={Snack} alt="" />}
                  <span className={`text-center`}> ЗАКУСКИ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/combo" onClick={() => linkClickHandler('combo')} className={router.pathname === '/combo' ? s.activeLink : null}>
                  {router.pathname === '/combo'
                    ? <img src={YelCombo} alt="" />
                    : <img src={Combo} alt="" />}
                 <span className={`text-center`}> КОМБО</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sets" onClick={() => linkClickHandler('sets')} className={router.pathname === '/sets' ? s.activeLink : null}>
                  {router.pathname === '/sets'
                    ? <img src={YelSets} alt="" />
                    : <img src={Sets} alt="" />}
                 <span className={`text-center`}> СЕТЫ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/desserts" onClick={() => linkClickHandler('desserts')} className={router.pathname === '/desserts' ? s.activeLink : null}>
                  {router.pathname === '/desserts'
                    ? <img src={YelDesserts} alt="" />
                    : <img src={Dessert} alt="" />}
                 <span className={`text-center`}> ДЕСЕРТЫ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/drinks" onClick={() => linkClickHandler('drinks')} className={router.pathname === '/drinks' ? s.activeLink : null}>
                  {router.pathname === '/drinks'
                    ? <img src={YelDrinks} alt="" />
                    : <img src={Drink} alt="" />}
                 <span className={`text-center`}> НАПИТКИ</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
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
