import React, { useEffect } from 'react'
import DiscountsList from '../components/discounts/DiscountsList'
import s from '../components/discounts/discounts.module.scss'
import { connect } from 'react-redux'
import { showDiscounts } from '../redux/actions/actions'

function Discounts({ showDiscounts, discounts }) {

  useEffect(() => {
    showDiscounts();
  });

  return (
    <div className={s.discounts_page}>
      <h3 className={s.discounts_page_heading}>Акции</h3>
      <DiscountsList discounts={discounts} />
    </div>
  )
}

const mapStateToProps = state => {
  const discounts = state.products.discounts;
  return { discounts };
}

const mapDispatchToProps = {
  showDiscounts
}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);
