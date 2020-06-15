import React, { useEffect } from 'react'
import WokVegitableList from '../components/wok/WokVegList'
import WokChickenList from '../components/wok/WokChickenList'
import s from '../components/wok/wok.module.scss'
import Billboard from '../components/billboard/Billboard'
import { connect } from 'react-redux'
import { getWoks } from '../redux/actions/actions'

function Wok({ getWoks, wok }) {

  useEffect(() => { getWoks() }, []);

  return (
    <div style={{ maxWidth: '1260px', margin: '0 auto' }} className={s.wok_page}>
      <Billboard />
      <WokVegitableList wok={wok} />
      <WokChickenList wok={wok} />
    </div>
  )
}

const mapStateToProps = state => {
  const wok = state.products.wok;
  return { wok }
}

const mapDispatchToProps = {
  getWoks
}

export default connect(mapStateToProps, mapDispatchToProps)(Wok)
