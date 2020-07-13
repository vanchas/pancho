import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDrinks, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/drinks/drinks.module.scss'
import DrinksList from '../components/drinks/DrinksList'
import Billboard from "../components/billboard/Billboard";

function Drinks({ getDrinks, drinks, addAnOrderItem }) {

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className={s.drinks_page}>
        <Billboard />
      <h3 className={s.drinks_page_heading}>НАПИТКИ</h3>
      <DrinksList drinks={drinks} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { drinks: state.products.drinks }
}

const mapDispatchToProps = {
  getDrinks, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
