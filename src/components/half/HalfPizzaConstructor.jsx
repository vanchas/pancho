import React from 'react'
import s from './half.module.scss'
import PizzaPlaceholder from '../../assets/images/pizza_placeholder.png'
import Basket from '../../assets/images/basket/korzina-01.svg'
import Green from '../../assets/images/green.png'
import Pepper from '../../assets/images/pepper.png'
import Diameter from '../../assets/images/diameter.png'
import ListItem from './ListItem'

export default function HalfPizzaConstructor({ rightHalfPizza, leftHalfPizza, pizzas, setLeftHalfPizza, setRightHalfPizza, addAnOrderItem }) {

  const setLeftHalfPizzaHandler = selectedPizza => {
    setLeftHalfPizza({ ...selectedPizza, size: 40 });
  }

  const setRightHalfPizzaHandler = selectedPizza => {
    setRightHalfPizza({ ...selectedPizza, size: 40 });
  }

  const completeAdOrder = () => {
    addAnOrderItem({
      image: leftHalfPizza.smallImage,
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
          <img className={s.pizza_half} src={leftHalfPizza.smallImage && leftHalfPizza.smallImage.length ? leftHalfPizza.smallImage : PizzaPlaceholder} alt="pizza" />
          <span>ЛЕВАЯ ПОЛОВИНКА</span>
        </div>
        {leftHalfPizza.name
          ? <div className={`text-left ${s.left_half_pizza_info}`}>
            <h5>{leftHalfPizza.name}
              <img src={Green} alt="" style={leftHalfPizza.green ? { opacity: '1' } : { opacity: '0.3' }} />
              <img src={Pepper} alt="" style={leftHalfPizza.hot ? { opacity: '1' } : { opacity: '0.3' }} />
            </h5>
            <p>{leftHalfPizza.description}</p>
          </div>
          : <p className={s.message_left}>Выберите пиццу</p>}

        {leftHalfPizza.name && rightHalfPizza.name
          ? <div className={`${s.order_block}`}>
            <button className={`${s.basket}`}
              onClick={completeAdOrder}>
              <img src={Basket} alt="" />
            В КОРЗИНУ
          </button>
          </div>
          : null}

        <ul className={s.mobile_pizza_list}>{pizzas.map((p, i) => (
          <li key={i} onClick={() => setLeftHalfPizzaHandler(p)}>
            <ListItem pizza={p} />
          </li>
        ))}</ul>

      </div>
      <div className={s.right_half_pizza_block}>
        <div className={s.right_half_pizza_image}>
          <img className={s.pizza_half} src={rightHalfPizza.smallImage && rightHalfPizza.smallImage.length ? rightHalfPizza.smallImage : PizzaPlaceholder} alt="pizza" />
          <span>ПРАВАЯ ПОЛОВИНКА</span>
        </div>
        {rightHalfPizza.name
          ? <div className={`text-right ${s.right_half_pizza_info}`}>
            <h5>
              <img src={Green} alt="" style={rightHalfPizza.green ? { opacity: '1' } : { opacity: '0.3' }} />
              <img src={Pepper} alt="" style={rightHalfPizza.hot ? { opacity: '1' } : { opacity: '0.3' }} />
              {rightHalfPizza.name}
            </h5>
            <p>{rightHalfPizza.description}</p>
          </div>
          : <p className={s.message_right}>Выберите пиццу</p>}

        {leftHalfPizza.name && rightHalfPizza.name
          ? <div className={`${s.order_block}`}>
            <span className="font-weight-bold h5 m-0 d-block pt-1">180 грн</span>
          </div>
          : null}

        <ul className={s.mobile_pizza_list}>
          {pizzas.map((p, i) => (
            <li key={i} onClick={() => setRightHalfPizzaHandler(p)}>
              <ListItem pizza={p} />
            </li>
          ))}</ul>
      </div>
    </div>
  )
}
