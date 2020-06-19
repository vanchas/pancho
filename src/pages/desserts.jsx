import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from '../components/desserts/desserts.module.scss'
import { getDesserts, addAnOrderItem } from '../redux/actions/actions'
import DessertsList from '../components/desserts/DessertsList'

function Desserts({ getDesserts, desserts, addAnOrderItem }) {

  useEffect(() => {
    getDesserts();
  }, []);

  return (
    <div className={s.desserts_page}>
      <h3 className={s.desserts_page_heading}>ДЕСЕРТЫ</h3>
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
