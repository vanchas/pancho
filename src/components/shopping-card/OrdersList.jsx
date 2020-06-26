import React from "react";
import OrderItem from "./OrderItem";
import s from "./orders.module.scss";

export default function OrdersList({
	orders,
	removeAnOrderItem,
	addAnOrderItem,
	incrementOrderItem,
	decrementOrderItem
}) {
	return (
		<ul className={s.orders_list}>
			{orders.length &&
				orders.map((o, i) => (
					<OrderItem
						key={i}
						order={o}
						removeAnOrderItem={removeAnOrderItem}
						addAnOrderItem={addAnOrderItem}
						incrementOrderItem={incrementOrderItem}
						decrementOrderItem={decrementOrderItem}
					/>
				))}
		</ul>
	);
}
