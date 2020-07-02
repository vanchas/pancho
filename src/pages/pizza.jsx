import React, { useEffect } from 'react'
import s from '../components/pizza/pizza.module.scss'
import PizzaList from '../components/pizza/PizzaList'
import Billboard from '../components/billboard/Billboard'
import { connect } from 'react-redux'
import { addAnOrderItem, getPizzas } from '../redux/actions/actions'

function Pizza({ addAnOrderItem, pizza, getPizzas }) {
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className={s.pizza_page}>
      <Billboard />
      <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
        <header>
          <h2>ПИЦЦЫ</h2>
        </header>
        <PizzaList addAnOrderItem={addAnOrderItem} pizzas={pizza} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { pizza: state.products.pizza }
}

const mapDispatchToProps = {
  addAnOrderItem,
  getPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
