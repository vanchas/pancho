import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCombos, addAnOrderItem } from '../redux/actions/actions'
import CombosList from '../components/combo/CombosList'
import s from '../components/combo/combo.module.scss'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Combo({ getCombos, combos, addAnOrderItem }) {

  useEffect(() => {
    getCombos();

    const timer = setTimeout(() => {
      scrollPage(550)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.combos_page}>
        <Billboard />
      <h2 className={s.combos_page_heading}>КОМБО</h2>
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
