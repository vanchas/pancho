import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSalads, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/salad/salad.module.scss'
import SaladList from '../components/salad/SaladList'
import Billboard from "../components/billboard/Billboard";

function Salad({ getSalads, salads, addAnOrderItem }) {

  useEffect(() => {
    getSalads();
  }, []);

  return (
    <div className={s.salad_page}>
        <Billboard />
      <h2 className={s.salad_page_heading}>CAЛATЫ</h2>
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
