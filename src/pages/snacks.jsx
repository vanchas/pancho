import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSnacks } from '../redux/actions/actions'
import SnacksList from '../components/snacks/SnacksList';
import s from '../components/snacks/snacks.module.scss'

function Snacks({ getSnacks, snacks }) {

  useEffect(() => {
    getSnacks();
  }, []);

  return (
    <div className={s.snacks_page}>
      <h3 className={s.snacks_page_heading}>ЗАКУСКИ</h3>
      <SnacksList snacks={snacks} />
    </div>
  )
}

const mapStateToProps = state => {
  return { snacks: state.products.snacks }
}

const mapDispatchToProps = {
  getSnacks
}

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);
