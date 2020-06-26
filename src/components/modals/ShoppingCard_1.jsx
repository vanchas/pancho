import React, { useState, useEffect } from "react";
import s from "./modal.module.scss";
import Widget from "../../assets/images/basket/widget.png";
import OrdersList from "../shopping-card/OrdersList";
import { connect } from "react-redux";
import Person from "../../assets/images/basket/person.png";
import Car from "../../assets/images/basket/car.png";
import SoucesList from "../shopping-card/SoucesList";
import Recommendations from "../shopping-card/Recommendations";
import {
	getDrinks,
	getSouces,
	addAnOrderItem,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem,
	openDeliveryShoppingCard,
	openPickupShoppingCard
} from "../../redux/actions/actions";
import ShoppingCard_2 from "./ShoppingCard_2";
import ShoppingCard_3 from "./ShoppingCard_3";

const ShoppingCard_1 = ({
	orders,
	souces,
	drinks,
	getDrinks,
	getSouces,
	addAnOrderItem,
	ordersAmount,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem,
	pickupCard,
	deliveryCard,
	openDeliveryShoppingCard,
	openPickupShoppingCard
}) => {
	const [step2, setStep2] = useState("delivery");
	const [show, setShow] = useState(false);

	useEffect(() => {
		getDrinks();
		getSouces();
	}, []);

	return (
		<React.Fragment>
			{deliveryCard &&
				<ShoppingCard_2 open={openDeliveryShoppingCard} />}
			{pickupCard &&
				<ShoppingCard_3 open={openPickupShoppingCard} />}

			<div className={s.shopping_card_widget}
				onClick={() => setShow(true)} >
				<img src={Widget} alt="shopping card" />
				<span>{ordersAmount} грн</span>
			</div>

			{show && <div className={`${show && s.show} ${s.shopping_card_1} shopping-card-1`}>
				<div className={`border-0 ${s.header}`}>
					В КОРЗИНЕ
					<span onClick={() => setShow(false)}>&#10006;</span>
				</div>

				<div className={s.body}>
					<OrdersList
						orders={orders}
						removeAnOrderItem={removeAnOrderItem}
						incrementOrderItem={incrementOrderItem}
						decrementOrderItem={decrementOrderItem} />
					<div className={s.delivery_control}>
						<div className={s.delivery_control_item}>
							<label>
								<img src={Person} alt="" />
								<input
									type="radio"
									name="delivery"
									onChange={() => setStep2("pickup")}
								/>
								<span>
									Самовывоз <br />
									<small>в пиццерии (скидка -5%)</small>
								</span>
							</label>
						</div>
						<div className={s.delivery_control_item}>
							<label>
								<img src={Car} alt="" />
								<input
									type="radio"
									name="delivery"
									onChange={() => setStep2("delivery")}
								/>
								<span>
									Доставка <br />
									<small>на определенный адрес</small>
								</span>
							</label>
						</div>
					</div>
					<SoucesList addAnOrderItem={addAnOrderItem} souces={souces} />
					<Recommendations addAnOrderItem={addAnOrderItem} drinks={drinks} />
				</div>

				<footer
					className={`d-flex justify-content-around border-0 pt-0 pb-3 ${s.footer}`}
				>
					<span className={`${s.total_sum}`}>ИТОГО: {ordersAmount} грн</span>
					{(step2 === "delivery")
						? <div className={s.order_btn}
							onClick={() => openDeliveryShoppingCard()}>
							ОФОРМИТЬ ЗАКАЗ</div>
						: <div className={s.order_btn}
							onClick={() => openPickupShoppingCard()}>
							ОФОРМИТЬ ЗАКАЗ</div>}
				</footer>
			</div>}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		orders: state.user.orders,
		souces: state.products.souces,
		drinks: state.products.drinks,
		ordersAmount: state.user.ordersAmount,
		deliveryCard: state.user.deliveryShoppingCard,
		pickupCard: state.user.pickupShoppingCard
	};
};

const mapDispatchToProps = {
	getDrinks,
	getSouces,
	addAnOrderItem,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem,
	openDeliveryShoppingCard,
	openPickupShoppingCard
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard_1);
