import React, {useState} from 'react'
import s from './half.module.scss'
// import PizzaPlaceholder from '../../assets/images/pizza_placeholder.png'
import PlaceholderLeft from '../../assets/images/placeholder_left.png'
import PlaceholderRight from '../../assets/images/placeholder_right.png'
import Basket from '../../assets/images/basket/korzina-01.svg'
import Green from '../../assets/images/green.png'
import Pepper from '../../assets/images/pepper.png'
import Diameter from '../../assets/images/diameter.png'
import LeftListItem from './LeftListItem'
import RightListItem from './RightListItem'
import {Tooltip} from "reactstrap";

export default function HalfPizzaConstructor({ rightHalfPizza, leftHalfPizza, pizzas, setLeftHalfPizza, setRightHalfPizza, addAnOrderItem }) {
  const [tooltipVeganLeft, setTooltipVeganLeft] = useState(false);
  const [tooltipHotLeft, setTooltipHotLeft] = useState(false);
  const [tooltipVeganRight, setTooltipVeganRight] = useState(false);
  const [tooltipHotRight, setTooltipHotRight] = useState(false);

  const setLeftHalfPizzaHandler = selectedPizza => {
    setLeftHalfPizza({ ...selectedPizza, size: 40 });
  }

  const setRightHalfPizzaHandler = selectedPizza => {
    setRightHalfPizza({ ...selectedPizza, size: 40 });
  }

  const completeAdOrder = () => {
    addAnOrderItem({
      image: leftHalfPizza.image,
      description: `FIRST PIZZA: ${leftHalfPizza.description}. / SECOND PIZZA: ${rightHalfPizza.description}`,
      green: null,
      hot: null,
      name: `${leftHalfPizza.name} / ${rightHalfPizza.name}`,
      price: (+leftHalfPizza.price.L / 2) + (+rightHalfPizza.price.L / 2),
      size: 40
    });
  }

  return (
    <div className={s.pizza_constructor}>
      <img src={Diameter} alt="diameter 40cm" className={s.diameter_image} />
      <div className={s.left_half_pizza_block}>
        <div className={s.left_half_pizza_image}>
          <img className={s.pizza_half} src={leftHalfPizza.image ? leftHalfPizza.image : PlaceholderLeft} alt="pizza" />
          <span className={`py-1`}>ЛЕВАЯ ПОЛОВИНКА</span>
        </div>
        {leftHalfPizza.name
          ? <div className={`text-left ${s.left_half_pizza_info}`}>
            <h5>{leftHalfPizza.name}
              <span>
              <img src={Green} alt="" style={leftHalfPizza.green ? { filter: 'none', opacity: '1' } : { filter: 'grayscale(1)', opacity: '0.3' }} id="vegetarian" />
              <Tooltip placement="top" style={{ backgroundColor: '#111' }}
                       isOpen={tooltipVeganLeft}
                       target="vegetarian" toggle={() => setTooltipVeganLeft(!tooltipVeganLeft)}>Вегетарианская</Tooltip>
              <img src={Pepper} alt="" style={leftHalfPizza.hot ? { filter: 'none', opacity: '1' } : { filter: 'grayscale(1)', opacity: '0.2' }} id="hot" />
              <Tooltip placement="top" style={{ backgroundColor: '#111' }}
                       isOpen={tooltipHotLeft}
                       target="hot" toggle={() => setTooltipHotLeft(!tooltipHotLeft)}>Острая</Tooltip>
              </span>
            </h5>
            <p>{leftHalfPizza.description}</p>
          </div>
          : <p className={s.message_left}>Выберите пиццу</p>}

        {leftHalfPizza.name && rightHalfPizza.name
          ? <div className={`${s.order_block} ${s.order_block_btn}`}>
            <button className={`${s.basket}`}
              onClick={(e) => {
                completeAdOrder()
              }}>
              <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          </div>
          : null}

        <ul className={s.mobile_pizza_list}>{pizzas.map((p, i) => (
          <li key={i} onClick={() => setLeftHalfPizzaHandler(p)}>
            <LeftListItem pizza={p} />
          </li>
        ))}</ul>

      </div>
      <div className={s.right_half_pizza_block}>
        <div className={s.right_half_pizza_image}>
          <img className={s.pizza_half} src={rightHalfPizza.image ? rightHalfPizza.image : PlaceholderRight} alt="pizza" />
          <span className={`py-1`}>ПРАВАЯ ПОЛОВИНКА</span>
        </div>
        {rightHalfPizza.name
          ? <div className={`text-right ${s.right_half_pizza_info}`}>
            <h5>
              <span>
              <img src={Green} alt="" style={rightHalfPizza.green ? { filter: 'none', opacity: '1' } : { filter: 'grayscale(1)', opacity: '0.3' }} id="vegetarian" />
              <Tooltip placement="top" style={{ backgroundColor: '#111' }}
                       isOpen={tooltipVeganRight}
                       target="vegetarian" toggle={() => setTooltipVeganRight(!tooltipVeganRight)}>Вегетарианская</Tooltip>
              <img src={Pepper} alt="" style={rightHalfPizza.hot ? { filter: 'none', opacity: '1' } : { filter: 'grayscale(1)', opacity: '0.2' }} id="hot" />
              <Tooltip placement="top" style={{ backgroundColor: '#111' }}
                       isOpen={tooltipHotRight}
                       target="hot" toggle={() => setTooltipHotRight(!tooltipHotRight)}>Острая</Tooltip>
                </span>
              {rightHalfPizza.name}
            </h5>
            <p>{rightHalfPizza.description}</p>
          </div>
          : <p className={s.message_right}>Выберите пиццу</p>}

        {leftHalfPizza.name && rightHalfPizza.name
          ? <div className={`${s.order_block}`}>
            <span className="font-weight-bold h5 m-0 d-block pt-2">
              {(+leftHalfPizza.price.L / 2) + (+rightHalfPizza.price.L / 2)}
              &nbsp;грн</span>
          </div>
          : null}

        <ul className={s.mobile_pizza_list}>
          {pizzas.map((p, i) => (
            <li key={i} onClick={() => setRightHalfPizzaHandler(p)}>
              <RightListItem pizza={p} />
            </li>
          ))}</ul>
      </div>
    </div>
  )
}
