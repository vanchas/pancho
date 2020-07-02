import React, { useEffect } from 'react'
import s from '../components/half/half.module.scss'
import { connect } from 'react-redux'
import { setLeftHalfPizza, setRightHalfPizza, addAnOrderItem, getPizzas } from '../redux/actions/actions'
import LeftList from '../components/half/LeftList'
import RightList from '../components/half/RightList'
import HalfPizzaConstructor from '../components/half/HalfPizzaConstructor'

const Half = ({ pizza, setLeftHalfPizza, setRightHalfPizza, rightHalfPizza, leftHalfPizza, addAnOrderItem, getPizzas }) => {
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className={s.half_page}>
      <h2 className={s.half_page_heading}>
        ПИЦЦА ПОЛОВИНКИ
      </h2>
      <p className="text-center h4 pb-3 px-2">Соедини 2 любых вкуса. Выбери левую половинку пиццы, а после правую половинку. <br /> Все пиццы-половинки идут в одном размере 40 см</p>
      <div className={s.half_pizza_constuctor_block}>
        <LeftList pizza={pizza}
          setLeftHalfPizza={setLeftHalfPizza} />
        <HalfPizzaConstructor
          pizzas={pizza}
          rightHalfPizza={rightHalfPizza}
          leftHalfPizza={leftHalfPizza}
          setLeftHalfPizza={setLeftHalfPizza}
          setRightHalfPizza={setRightHalfPizza}
          addAnOrderItem={addAnOrderItem} />
        <RightList pizza={pizza}
          setRightHalfPizza={setRightHalfPizza} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const pizzas = state.products.pizza;
  const leftHalfPizza = state.products.leftHalfPizza;
  const rightHalfPizza = state.products.rightHalfPizza;
  return {
    pizza: pizzas,
    rightHalfPizza,
    leftHalfPizza
  }
}

const mapDispatchToProps = {
  setLeftHalfPizza,
  setRightHalfPizza,
  addAnOrderItem,
  getPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(Half);
