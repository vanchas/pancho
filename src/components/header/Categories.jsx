import React, { useEffect, useRef } from "react";
import s from "./categories.module.scss";
import { useRouter } from "next/router";
import Pizza from "../../assets/images/categories/category_pizza.png";
import Half from "../../assets/images/categories/category_half.png";
import Wok from "../../assets/images/categories/category_wok.png";
import Snack from "../../assets/images/categories/category_snack.png";
import Pasta from "../../assets/images/categories/category_pasta.png";
import Salad from "../../assets/images/categories/category_salad.png";
import Combo from "../../assets/images/categories/category_combo.png";
import Sets from "../../assets/images/categories/category_set.png";
import Dessert from "../../assets/images/categories/category_desert.png";
import Drink from "../../assets/images/categories/category_drink.png";

import YelDesserts from "../../assets/images/yellow-categories/dessert.png";
import YelCombo from "../../assets/images/yellow-categories/combo.png";
import YelDrinks from "../../assets/images/yellow-categories/drink.png";
import YelPasta from "../../assets/images/yellow-categories/pasta.png";
import YelPizza from "../../assets/images/yellow-categories/pizza.png";
import YelHalf from "../../assets/images/yellow-categories/half.png";
import YelSalads from "../../assets/images/yellow-categories/salad.png";
import YelSets from "../../assets/images/yellow-categories/set.png";
import YelWok from "../../assets/images/yellow-categories/wok.png";
import YelSnacks from "../../assets/images/yellow-categories/snack.png";
import $ from "jquery";
import Link from "next/link";

export default function Categories(props) {
  const router = useRouter();
  const $ref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      makeComponentSticky();
    });
  }, []);

  const makeComponentSticky = () => {
    if (window.scrollY > 250) {
      $($ref.current).addClass("sticky_element");
    } else {
      $($ref.current).removeClass("sticky_element");
    }
  };

  const links = [
    {name: 'ПИЦЦА', path: '/pizza', img: Pizza, yelImg: YelPizza},
    {name: 'ПОЛОВИНКИ', path: '/half', img: Half, yelImg: YelHalf},
    {name: 'ВОК', path: '/wok', img: Wok, yelImg: YelWok},
    {name: 'ПАСТА', path: '/pasta', img: Pasta, yelImg: YelPasta},
    {name: 'CAЛATЫ', path: '/salad', img: Salad, yelImg: YelSalads},
    {name: 'ЗАКУСКИ', path: '/snacks', img: Snack, yelImg: YelSnacks},
    {name: 'КОМБО', path: '/combo', img: Combo, yelImg: YelCombo},
    {name: 'СЕТЫ', path: '/sets', img: Sets, yelImg: YelSets},
    {name: 'ДЕСЕРТЫ', path: '/desserts', img: Dessert, yelImg: YelDesserts},
    {name: 'НАПИТКИ', path: '/drinks', img: Drink, yelImg: YelDrinks},
  ]

  return (
    <div ref={$ref} className={s.categories_wrap}>
      <div className={s.categories_wrap_inner}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>
                <a className={router.pathname === link.path ? s.activeLink : null}>
                {router.pathname === link.path
                  ? <img src={link.yelImg} alt="" />
                  : <img src={link.img} alt="" />}
                <span className={`text-center`}> {link.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

