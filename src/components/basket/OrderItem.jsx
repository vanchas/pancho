import React, { useState } from "react";
import s from "./orders.module.scss";

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
            src={order.image ? order.image : order.smallImage}
            alt={order.name}
          />
        </div>
        <span className={s.order_item_name}>
          {order.name} {order.size}
        </span>
        <div className={s.order_item_count_control}>
          <div onClick={() => {
            if (order.counter > 1) {
              decrementOrderItem(order.id)
              setCount(count-- - 1)
            }
          }}>-</div>
          <span>{count}</span>
          <div onClick={() => {
            incrementOrderItem(order.id)
            setCount(count++ + 1)
          }}>+</div>
        </div>
        <span className={s.order_item_price}>{order.price} грн</span>
        <span
          className={s.order_item_remove}
          onClick={() => removeAnOrderItem(order.id)}
        >
          x
			</span>
      </> : null}
    </li>
  );
}
