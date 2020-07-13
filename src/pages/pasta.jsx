import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPastas, addAnOrderItem } from '../redux/actions/actions'
import s from '../components/pastas/pasta.module.scss'
import PastasList from '../components/pastas/PastasList'
import Billboard from "../components/billboard/Billboard";

function Pasta({ getPastas, pastas, addAnOrderItem }) {

  useEffect(() => {
    getPastas();
  }, []);

  return (
    <div className={s.pastas_page}>
        <Billboard />
      <h3 className={s.pastas_page_heading}>ПАСТА</h3>
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
