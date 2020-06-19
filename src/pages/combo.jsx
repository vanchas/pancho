import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCombos, addAnOrderItem } from '../redux/actions/actions'
import CombosList from '../components/combo/CombosList'
import s from '../components/combo/combo.module.scss'

function Combo({ getCombos, combos, addAnOrderItem }) {

  useEffect(() => {
    getCombos();
  }, []);

  return (
    <div className={s.combos_page}>
      <h3 className={s.combos_page_heading}>КОМБО</h3>
      <CombosList combos={combos} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { combos: state.products.combos }
}

const mapDispatchToProps = {
  getCombos, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo);
