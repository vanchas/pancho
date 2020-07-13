import React, { useEffect } from 'react'
import WokVegitableList from '../components/wok/WokVegList'
import WokChickenList from '../components/wok/WokChickenList'
import s from '../components/wok/wok.module.scss'
import Billboard from '../components/billboard/Billboard'
import { connect } from 'react-redux'
import { getWoks, addAnOrderItem } from '../redux/actions/actions'

function Wok({ getWoks, woks }) {

  useEffect(() => { getWoks() }, []);

  return (
    <div className={s.wok_page}>
      <Billboard />
      <div style={{ maxWidth: '1900px', margin: '0 auto' }}>
        <WokVegitableList woks={woks} addAnOrderItem={addAnOrderItem} />
        <WokChickenList woks={woks} addAnOrderItem={addAnOrderItem} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const woks = state.products.wok;
  return { woks }
}

const mapDispatchToProps = {
  getWoks, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Wok)
