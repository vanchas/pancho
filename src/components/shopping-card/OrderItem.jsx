import React, { useState } from "react";
import s from "./orders.module.scss";
import Plus from '../../assets/images/basket/plus.png';
import Minus from '../../assets/images/basket/minus.png';
import Remove from '../../assets/images/basket/remove.png';

export default function OrderItem({
  order,
  removeAnOrderItem,
  incrementOrderItem,
  decrementOrderItem,
}) {
  let [count, setCount] = useState(order.counter);

  return (
    <li className={s.order_item}>
      {order ? <>
        <div className={s.order_item_image}>
          <img
            src={order.image}
            alt={order.name}
          />
        </div>
        <span className={s.order_item_name}>
          {order.name} {order.size}
        </span>
        <div className={s.order_item_count_control}>
          <div className={s.minus} onClick={() => {
            if (order.counter > 1) {
              decrementOrderItem(order.orderId)
              setCount(count-- - 1)
            }
          }}>
            <img src={Minus} alt="-" />
          </div>
          <span className={s.count_number}>{count}</span>
          <div className={s.plus} onClick={(e) => {
            incrementOrderItem(order.orderId)
            setCount(count++ + 1)
          }}>
            <img src={Plus} alt="+" />
          </div>
        </div>
        <span className={s.order_item_price}>{order.price} грн</span>
        <span
          className={s.order_item_remove}
          onClick={() => {
            removeAnOrderItem(order.orderId)
          }}
        >
          <img src={Remove} alt="x" />
        </span>
      </> : null}
    </li>
  );
}
