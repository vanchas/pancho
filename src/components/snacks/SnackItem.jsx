import React from 'react'
import s from './snacks.module.scss';
import Basket from '../../assets/images/basket/korzina-01.svg'
import { connect } from "react-redux";
import {increaseFreeSoucesCounter} from "../../redux/actions/actions";

function SnackItem({ snack, addAnOrderItem, increaseFreeSoucesCounter }) {
  return (
    <li className={s.snack_item}>
      <div className={s.snack_image}>
        <img src={snack.image} alt={snack.name} />
      </div>
      <div className={s.snack_info}>
        <h5 className={s.snack_name}>{snack.name}</h5>
        <small className={s.snack_weight}>{snack.weight} г</small>
        <p>{snack.description}</p>
        <div className={s.snack_btn}>
          <span onClick={(e) => {
            addAnOrderItem(snack)
            increaseFreeSoucesCounter(1)
          }}>
            <img src={Basket} alt="" />
            В КОРЗИНУ</span>
        </div>
        <span className={s.snack_price}>{snack.price} грн</span>
      </div>
    </li>
  )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = {
  increaseFreeSoucesCounter
}
export default connect(mapStateToProps, mapDispatchToProps)(SnackItem)
