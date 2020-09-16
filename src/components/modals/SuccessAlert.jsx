import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './alert.module.scss'
import { showSuccess } from "../../redux/actions/actions";

function SuccessAlert() {
  const product = useSelector(state => state.user.showSuccess)
  const dispatch = useDispatch()

  return (
    <div className={`${s.root} shadow`}>
      <div className={s.header}>
        <span>Добавлено в корзину</span>
        <span onClick={() => dispatch(showSuccess(null))}>
          <i className="fas fa-times" />
        </span>
      </div>
      <div className={s.product}>
        <span>{product.name}</span>
        <span className={s.price}>{product.price} грн</span>
      </div>
    </div>
  );
}

export default SuccessAlert;
