import React, { useState } from 'react'
import s from './pizza.module.scss'
import $ from 'jquery'
import Person from '../../assets/images/pizzas/person.png'
import Basket from '../../assets/images/basket/korzina-01.svg'
import Pepper from '../../assets/images/pepper.png'
import Green from '../../assets/images/green.png'
import { Tooltip } from 'reactstrap'

export default function PizzaCard({ addAnOrderItem, pizza }) {
  const [activeBtn, setActiveBtn] = useState(2);
  const [peopleCount, setPeopleCount] = useState('3-4');
  const [tooltipPerson, setTooltipPerson] = useState(false);
  const [tooltipVegan, setTooltipVegan] = useState(false);
  const [tooltipHot, setTooltipHot] = useState(false);

  const selectPizzaSize = size => {
    $(`.pizza-price-${pizza.id}`).fadeOut(() => {
      setActiveBtn(size);
      if (size === 0) {
        setPeopleCount('1-2');
      } else if (size === 1) {
        setPeopleCount('2-3');
      } else if (size === 2) {
        setPeopleCount('3-4');
      }
      setTimeout(() => {
        $(`.pizza-price-${pizza.id}`).fadeIn();
      }, 0);
    });
  }

  return (
    <div className={`${s.card} card border-0`}>
      <img className={`${s.big_pizza_image}`} src={pizza.bigImage} alt={pizza.name} />
      <div className={s.card_body}>
        <h5 className={`${s.card_title}`}>
          {pizza.name}
          <small className="text-muted">{pizza.weight}г +- 50г</small>
        </h5>
        <h6 className={`${s.subtitle} card-subtitle mb-2 text-muted`}>
          <span className={s.subtitle_control}>
            <span className={s.new}>НОВИНКА</span>
            <span className={s.hit}>ХИТ</span>
            <img src={Green} alt="" style={pizza.green ? { display: 'block' } : { display: 'none' }} id="vegetarian" />
            <Tooltip placement="top" style={{ backgroundColor: '#111' }}
              isOpen={tooltipVegan}
              target="vegetarian" toggle={() => setTooltipVegan(!tooltipVegan)}>Вегетарианская</Tooltip>
            <img src={Pepper} alt="" style={pizza.hot ? { display: 'block' } : { display: 'none' }} id="hot" />
            <Tooltip placement="top" style={{ backgroundColor: '#111' }}
              isOpen={tooltipHot}
              target="hot" toggle={() => setTooltipHot(!tooltipHot)}>Острая</Tooltip>
          </span>
          <span id="person">
            <img src={Person} alt="" className={s.person} />
            <span className={s.person_count}>{peopleCount}</span>
          </span>
          <Tooltip placement="top" style={{ backgroundColor: '#111' }} isOpen={tooltipPerson}
            target="person" toggle={() => setTooltipPerson(!tooltipPerson)}>
            На какое кол-во людей пицца
          </Tooltip>
        </h6>
        <p className={s.card_text}>{pizza.description}</p>
        <div className={s.size_select}>
          <label className={activeBtn === 0 ? s.activeBtn : ''} >{Object.values(pizza.size)[0]} см
            <input type="radio" name="size" value="25 см" onChange={() => selectPizzaSize(0)} />
          </label>
          <label className={activeBtn === 1 ? s.activeBtn : ''} >{Object.values(pizza.size)[1]} см
            <input type="radio" name="size" value="30 см" onChange={() => selectPizzaSize(1)} />
          </label>
          <label className={activeBtn === 2 ? s.activeBtn : ''} >{Object.values(pizza.size)[2]} см
            <input type="radio" name="size" value="40 см" onChange={() => selectPizzaSize(2)} />
          </label>
        </div>
        <div className={`d-flex justify-content-between align-items-center`}>
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
          <span className={`${s.price} pizza-price-${pizza.id}`}>{Object.values(pizza.price)[activeBtn]} грн</span>
        </div>
      </div>
    </div>

  )
}
