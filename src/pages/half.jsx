import React from 'react'
import s from '../components/half/half.module.scss'
import { connect } from 'react-redux'
import { setLeftHalfPizza, setRightHalfPizza } from '../redux/actions/actions'
import LeftList from '../components/half/LeftList'
import RightList from '../components/half/RightList'
import HalfPizzaConstructor from '../components/half/HalfPizzaConstructor'
import { pizza } from '../../fakePizzas'

const Half = ({ pizza, setLeftHalfPizza, setRightHalfPizza, rightHalfPizza, leftHalfPizza }) => {

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
          pizza={pizza}
          rightHalfPizza={rightHalfPizza}
          leftHalfPizza={leftHalfPizza}
          setLeftHalfPizza={setLeftHalfPizza}
          setRightHalfPizza={setRightHalfPizza} />
        <RightList pizza={pizza}
          setRightHalfPizza={setRightHalfPizza} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const pizzas = state.pizza.pizza;
  const leftHalfPizza = state.pizza.leftHalfPizza;
  const rightHalfPizza = state.pizza.rightHalfPizza;
  return {
    pizza: pizzas,
    rightHalfPizza,
    leftHalfPizza
  }
}

const mapDispatchToProps = {
  setLeftHalfPizza,
  setRightHalfPizza
}

export default connect(mapStateToProps, mapDispatchToProps)(Half);
