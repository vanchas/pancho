import React, { useState, useEffect } from 'react'
import s from '../components/cabinet/cabinet.module.scss'
import CabinetControl from '../components/cabinet/CabinetControl'
import UserAbout from '../components/cabinet/UserAbout'
import UserHistory from '../components/cabinet/UserHistory'
import UserBonus from '../components/cabinet/UserBonus'
import UserAddress from '../components/cabinet/UserAddress'
import { getAddress, getBonuses, repeatOrder } from '../redux/actions/actions'
import { connect } from 'react-redux'

function Cabinet({ getBonuses, getAddress, addresses, bonuses, repeatOrder }) {
  const [component, setComponent] = useState(<UserAbout />);
  const [ref, setRef] = useState('about');

  useEffect(() => {
    getAddress();
    getBonuses();
  }, []);

  const setVisible = ref => {
    setRef(ref);
    if (ref === 'about') {
      setComponent(<UserAbout />);
    } else if (ref === 'history') {
      setComponent(<UserHistory repeatOrder={repeatOrder} />);
    } else if (ref === 'address') {
      setComponent(<UserAddress addresses={addresses} />);
    } else if (ref === 'bonus') {
      setComponent(<UserBonus bonuses={bonuses} />);
    }
  }

  return (
    <div className={s.cabinet_page}>
      <h2 className={s.cabinet_heading}>
        ЛИЧНЫЙ КАБИНЕТ
      </h2>
      <CabinetControl component={ref} setVisible={setVisible} />
      <div className={s.component}>{component}</div>
    </div>
  )
}

const mapStateToProps = state => {
 return {
    addresses: state.user.addresses,
    bonuses: state.user.bonuses,
 }
}

const mapDispatchToProps = {
  getAddress,
  getBonuses,
  repeatOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);
