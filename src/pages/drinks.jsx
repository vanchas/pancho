import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDrinks, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/drinks/drinks.module.scss'
import DrinksList from '../components/drinks/DrinksList'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Drinks({ getDrinks, drinks, addAnOrderItem }) {

  useEffect(() => {
    getDrinks();

    const timer = setTimeout(() => {
      scrollPage(650)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.drinks_page}>
        <Billboard />
      <h2 className={s.drinks_page_heading}>НАПИТКИ</h2>
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
