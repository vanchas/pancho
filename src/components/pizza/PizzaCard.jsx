import React, { useState } from 'react'
import s from './pizza.module.scss'
import Person from '../../assets/images/person.png'
import Basket from '../../assets/images/basket.png'
import Pepper from '../../assets/images/pepper.png'
import Green from '../../assets/images/green.png'

export default function PizzaCard({ addAnOrderItem, pizza }) {
  const [activeBtn, setActiveBtn] = useState(2);

  return (
    <div className={`${s.card} card border-0`}>
      <img className="card-img-top" src={pizza.bigImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className={`${s.card_title} card-title`}>
          {pizza.name}
          <small className="text-muted">{pizza.weight}г +- 50г</small>
        </h5>
        <h6 className={`${s.subtitle} card-subtitle mb-2 text-muted`}>
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
        <p className={s.card_text}>{pizza.description}</p>
        <div className={s.size_select}>
          <label className={activeBtn === 0 ? s.activeBtn : ''} >{Object.values(pizza.size)[0]} см
            <input type="radio" name="size" value="25 см" onChange={() => setActiveBtn(0)} />
          </label>
          <label className={activeBtn === 1 ? s.activeBtn : ''} >{Object.values(pizza.size)[1]} см
            <input type="radio" name="size" value="30 см" onChange={() => setActiveBtn(1)} />
          </label>
          <label className={activeBtn === 2 ? s.activeBtn : ''} >{Object.values(pizza.size)[2]} см
            <input type="radio" name="size" value="40 см" onChange={() => setActiveBtn(2)} />
          </label>
        </div>
        <div className={`d-flex justify-content-between`}>
          <button className={`${s.basket} btn`}
            onClick={() => addAnOrderItem({
              bigImage: pizza.bigImage,
              smallImage: pizza.smallImage,
              description: pizza.description,
              name: pizza.name,
              size: Object.values(pizza.size)[activeBtn],
              green: pizza.green,
              hot: pizza.hot,
              price: Object.values(pizza.price)[activeBtn]
            })}>
            <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          <span className="font-weight-bold h5">{Object.values(pizza.price)[activeBtn]} грн</span>
        </div>
      </div>
    </div>

  )
}
