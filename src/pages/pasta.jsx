import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPastas } from '../redux/actions/actions'
import s from '../components/pastas/pasta.module.scss'
import PastasList from '../components/pastas/PastasList'

function Pasta({ getPastas, pastas }) {

  useEffect(() => {
    getPastas();
  }, []);

  return (
    <div className={s.pastas_page}>
      <h3 className={s.pastas_page_heading}>ПАСТА</h3>
      <PastasList pastas={pastas} />
    </div>
  )
}

const mapStateToProps = state => {
  return { pastas: state.products.pastas }
}

const mapDispatchToProps = {
  getPastas
}

export default connect(mapStateToProps, mapDispatchToProps)(Pasta);
