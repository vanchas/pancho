import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSalads, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/salad/salad.module.scss'
import SaladList from '../components/salad/SaladList'

function Salad({ getSalads, salads, addAnOrderItem }) {

  useEffect(() => {
    getSalads();
  }, []);

  return (
    <div className={s.salad_page}>
      <h3 className={s.salad_page_heading}>CAЛATЫ</h3>
      <SaladList salads={salads} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { salads: state.products.salads }
}

const mapDispatchToProps = {
  getSalads, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Salad);
