import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from '../components/desserts/desserts.module.scss'
import { getDesserts, addAnOrderItem } from '../redux/actions/actions'
import DessertsList from '../components/desserts/DessertsList'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Desserts({ getDesserts, desserts, addAnOrderItem }) {

  useEffect(() => {
    getDesserts();

    const timer = setTimeout(() => {
      scrollPage(650)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.desserts_page}>
        <Billboard />
      <h2 className={s.desserts_page_heading}>ДЕСЕРТЫ</h2>
      <DessertsList desserts={desserts} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { desserts: state.products.desserts }
}

const mapDispatchToProps = {
  getDesserts, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Desserts);
