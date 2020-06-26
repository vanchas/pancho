import React, { useState, useEffect } from 'react'
import s from '../components/cabinet/cabinet.module.scss'
import CabinetControl from '../components/cabinet/CabinetControl'
import UserAbout from '../components/cabinet/UserAbout'
import UserHistory from '../components/cabinet/UserHistory'
import UserBonus from '../components/cabinet/UserBonus'
import UserAddress from '../components/cabinet/UserAddress'
import { getTransactions, getAddress, getBonuses, getHistory, repeatOrder } from '../redux/actions/actions'
import { connect } from 'react-redux'

function Cabinet({ getBonuses, getAddress, getTransactions, transactions, addresses, bonuses, history, getHistory, repeatOrder }) {
  const [component, setComponent] = useState(<UserAbout />);
  const [ref, setRef] = useState('about');

  useEffect(() => {
    getTransactions();
    getAddress();
    getBonuses();
    getHistory();
  }, []);

  const setVisible = ref => {
    setRef(ref);
    if (ref === 'about') {
      setComponent(<UserAbout />);
    } else if (ref === 'history') {
      setComponent(<UserHistory transactions={transactions} history={history} repeatOrder={repeatOrder} />);
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
  const transactions = state.user.transactions;
  const addresses = state.user.addresses;
  const bonuses = state.user.bonuses;
  const history = state.user.history;
  return { transactions, addresses, bonuses, history }
}

const mapDispatchToProps = {
  getTransactions,
  getAddress,
  getBonuses,
  getHistory,
  repeatOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);
