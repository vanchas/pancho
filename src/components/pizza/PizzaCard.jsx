import React, { useState } from 'react'
import s from './pizza.module.scss'
import Person from '../../assets/images/person.png'
import Basket from '../../assets/images/basket.png'
import Pepper from '../../assets/images/pepper.png'
import Green from '../../assets/images/green.png'

export default function PizzaCard({ image }) {
  const [activeBtn, setActiveBtn] = useState(3);

  return (
    <div className={`${s.card} card border-0`}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className={`${s.card_title} card-title`}>
          Маргарита
          <small className="text-muted">1280г +- 50г</small>
        </h5>
        <h6 class={`${s.subtitle} card-subtitle mb-2 text-muted`}>
          <span className={s.subtitle_control}>
            <img src={Green} alt="" />
            <img src={Pepper} alt="" />
            <span className={s.new}>НОВИНКА</span>
            <span className={s.hit}>ХИТ</span>
          </span>
          <span>
            <img src={Person} alt="" className={s.person} />
            3-4
          </span>
        </h6>
        <p className={s.card_text}>Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано</p>
        <div className={s.size_select}>
          <label className={activeBtn === 1 ? s.activeBtn : ''} >25 см
            <input type="radio" value="25 см" onChange={() => setActiveBtn(1)} />
          </label>
          <label className={activeBtn === 2 ? s.activeBtn : ''} >30 см
            <input type="radio" value="30 см" onChange={() => setActiveBtn(2)} />
          </label>
          <label className={activeBtn === 3 ? s.activeBtn : ''} >40 см
            <input type="radio" value="40 см" onChange={() => setActiveBtn(3)} />
          </label>
        </div>
        <div className={`d-flex justify-content-between`}>
          <button className={`${s.basket} btn`}>
            <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          <span className="font-weight-bold h5">180 грн</span>
        </div>
      </div>
    </div>

  )
}
