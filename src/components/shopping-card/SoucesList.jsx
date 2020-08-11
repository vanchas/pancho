import React from 'react'
import s from './orders.module.scss'
import { connect } from "react-redux";
import { decreaseFreeSoucesCounter } from "../../redux/actions/actions";

function SoucesList({ souces, addAnOrderItem, freeSoucesCounter, decreaseFreeSoucesCounter }) {
  return (
    <div>{souces.length ? <>
      <h5 className={s.souces_heading}>СОУСЫ</h5>
      <ul className={s.souces_list}>
        {souces.map((souce, i) => (
          <li key={i}>
            <div className={s.souce_image}>
              <img src={souce.image} alt={souce.name} />
            </div>
            <span className={s.souce_price}>{souce.price} грн</span>
            <span className={s.souce_name}>{souce.name}</span>
            <div className={s.to_basket_btn}>
              <span onClick={e => {
                e.target.style.backgroundColor = '#ffb025'
                if (freeSoucesCounter > 0) {
                  addAnOrderItem({ ...souce, price: 0 })
                  decreaseFreeSoucesCounter()
                } else {
                  addAnOrderItem(souce)
                }
              }}> В КОРЗИНУ</span>
            </div>
          </li>
        ))}
      </ul>
    </> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  freeSoucesCounter: state.user.freeSoucesCounter
})
const mapDispatchToProps = {
  decreaseFreeSoucesCounter,
}
export default connect(mapStateToProps, mapDispatchToProps)(SoucesList)