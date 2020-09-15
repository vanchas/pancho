import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSets, addAnOrderItem } from '../redux/actions/actions'
import SetsList from '../components/sets/SetsList'
import s from '../components/sets/sets.module.scss'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Sets({ getSets, sets, addAnOrderItem }) {

  useEffect(() => {
    getSets();

    const timer = setTimeout(() => {
      scrollPage(650)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.sets_page}>
        <Billboard />
      <h2 className={s.sets_page_heading}>СЕТЫ</h2>
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
