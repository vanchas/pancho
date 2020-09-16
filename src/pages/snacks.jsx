import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSnacks, addAnOrderItem } from '../redux/actions/actions'
import SnacksList from '../components/snacks/SnacksList';
import s from '../components/snacks/snacks.module.scss'
import Billboard from "../components/billboard/Billboard";
import scrollPage from "../utils/scroll-page";

function Snacks({ getSnacks, snacks, addAnOrderItem }) {

  useEffect(() => {
    getSnacks();

    const timer = setTimeout(() => {
      scrollPage(550)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.snacks_page}>
        <Billboard />
      <h2 className={s.snacks_page_heading}>ЗАКУСКИ</h2>
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
