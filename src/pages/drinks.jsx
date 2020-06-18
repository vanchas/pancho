import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDrinks } from '../redux/actions/actions'
import s from '../components/drinks/drinks.module.scss'
import DrinksList from '../components/drinks/DrinksList'

function Drinks({ getDrinks, drinks }) {

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className={s.drinks_page}>
      <h3 className={s.drinks_page_heading}>НАПИТКИ</h3>
      <DrinksList drinks={drinks} />
    </div>
  )
}

const mapStateToProps = state => {
  return { drinks: state.products.drinks }
}

const mapDispatchToProps = {
  getDrinks
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
