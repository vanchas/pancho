import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PropTypes } from "prop-types";
import s from "./modal.module.scss";
import Widget from "../../assets/images/basket/widget.png";
import OrdersList from "../basket/OrdersList";
import { connect } from "react-redux";
import Person from "../../assets/images/basket/person.png";
import Car from "../../assets/images/basket/car.png";
import SoucesList from "../basket/SoucesList";
import Recommendations from "../basket/Recommendations";
import {
	getDrinks,
	getSouces,
	addAnOrderItem,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem
} from "../../redux/actions/actions";
import BasketStep_2_Delivery from "./BasketStep_2_Delivery";
import BasketStep_2_Pickup from "./BasketStep_2_Pickup";

const BasketStep_1 = ({
	orders,
	souces,
	drinks,
	getDrinks,
	getSouces,
	addAnOrderItem,
	ordersAmount,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem
}) => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const [step2, setStep2] = useState("delivery");

	useEffect(() => {
		getDrinks();
		getSouces();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Button color="" className={`p-0 ${s.basket_widget}`} onClick={toggle}>
				<img src={Widget} alt="" />
				<span>{ordersAmount} грн</span>
			</Button>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle} className={`border-0 ${s.header}`}>
					В КОРЗИНЕ
				</ModalHeader>

				<ModalBody className={s.body}>
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
				</ModalBody>

				<ModalFooter
					className={`d-flex justify-content-around border-0 pt-0 pb-3 ${s.footer}`}
				>
					<span className={`${s.total_sum}`}>ИТОГО: {ordersAmount} грн</span>
					{step2 === "delivery" ? (
						<BasketStep_2_Delivery
							ordersAmount={ordersAmount}
							buttonLabel={`ОФОРМИТЬ ЗАКАЗ`}
						/>
					) : (
							<BasketStep_2_Pickup
								ordersAmount={ordersAmount}
								buttonLabel={`ОФОРМИТЬ ЗАКАЗ`}
							/>
						)}
				</ModalFooter>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		orders: state.user.orders,
		souces: state.products.souces,
		drinks: state.products.drinks,
		ordersAmount: state.user.ordersAmount,
	};
};

const mapDispatchToProps = {
	getDrinks,
	getSouces,
	addAnOrderItem,
	removeAnOrderItem,
	incrementOrderItem,
	decrementOrderItem
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	autoFocus: PropTypes.bool,
	centered: PropTypes.bool,
	size: PropTypes.string,
	toggle: PropTypes.func,
	role: PropTypes.string,
	labelledBy: PropTypes.string,
	keyboard: PropTypes.bool,
	backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
	scrollable: PropTypes.bool,
	onEnter: PropTypes.func,
	onExit: PropTypes.func,
	onOpened: PropTypes.func,
	onClosed: PropTypes.func,
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	fade: PropTypes.bool,
	cssModule: PropTypes.object,
	zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	innerRef: PropTypes.object,
	unmountOnClose: PropTypes.bool,
	returnFocusAfterClose: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketStep_1);
