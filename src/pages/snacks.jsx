import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSnacks, addAnOrderItem } from '../redux/actions/actions'
import SnacksList from '../components/snacks/SnacksList';
import s from '../components/snacks/snacks.module.scss'
import Billboard from "../components/billboard/Billboard";

function Snacks({ getSnacks, snacks, addAnOrderItem }) {

  useEffect(() => {
    getSnacks();
  }, []);

  return (
    <div className={s.snacks_page}>
        <Billboard />
      <h3 className={s.snacks_page_heading}>ЗАКУСКИ</h3>
      <SnacksList snacks={snacks} addAnOrderItem={addAnOrderItem} />
    </div>
  )
}

const mapStateToProps = state => {
  return { snacks: state.products.snacks }
}

const mapDispatchToProps = {
  getSnacks, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);
