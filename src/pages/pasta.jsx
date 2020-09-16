import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPastas, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/pastas/pasta.module.scss'
import PastasList from '../components/pastas/PastasList'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Pasta({ getPastas, pastas, addAnOrderItem }) {

  useEffect(() => {
    getPastas();

    const timer = setTimeout(() => {
      scrollPage(550)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.pastas_page}>
        <Billboard />
      <h2 className={s.pastas_page_heading}>ПАСТА</h2>
      <PastasList pastas={pastas} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { pastas: state.products.pastas }
}

const mapDispatchToProps = {
  getPastas, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Pasta);
