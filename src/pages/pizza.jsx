import React from 'react'
import s from '../components/pizza/pizza.module.scss'
import PizzaList from '../components/pizza/PizzaList'
import Billboard from '../components/billboard/Billboard'
import { connect } from 'react-redux'
import { addAnOrderItem } from '../redux/actions/actions'

function Pizza({ addAnOrderItem, pizza }) {
  return (
    <div style={{ maxWidth: '1260px', margin: '0 auto' }} className={s.pizza_page}>
      <Billboard />
      <header>
        <h2>ПИЦЦЫ</h2>
      </header>
      <PizzaList addAnOrderItem={addAnOrderItem} pizzas={pizza} />
    </div>
  )
}

const mapStateToProps = state => {
  return { pizza: state.products.pizza }
}

const mapDispatchToProps = {
  addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
