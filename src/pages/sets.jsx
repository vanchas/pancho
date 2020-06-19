import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSets, addAnOrderItem } from '../redux/actions/actions'
import SetsList from '../components/sets/SetsList'
import s from '../components/sets/sets.module.scss'

function Sets({ getSets, sets, addAnOrderItem }) {

  useEffect(() => {
    getSets();
  }, []);

  return (
    <div className={s.sets_page}>
      <h3 className={s.sets_page_heading}>СЕТЫ</h3>
      <SetsList sets={sets} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { sets: state.products.sets }
}

const mapDispatchToProps = {
  getSets, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Sets);
