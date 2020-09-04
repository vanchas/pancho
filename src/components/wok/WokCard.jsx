import React from "react";
import s from "./wok.module.scss";
import Basket from "../../assets/images/basket/korzina-01.svg";
import { connect } from "react-redux";
import {
	increaseFreeSoucesCounter,
	addAnOrderItem,
} from "../../redux/actions/actions";

function WokCard({ wok, addAnOrderItem, increaseFreeSoucesCounter }) {
	return (
		<div className={`${s.card} card border-0`}>
			{wok && (
				<>
					<img className={s.wok_image} src={wok.image} alt={wok.name} />
					<div className={s.card_body}>
						<h5 className={`${s.card_title}`}>
							{wok.name}
							<small className="text-muted">{wok.weight}г +- 20г</small>
						</h5>
						<p className={s.card_text}>{wok.description}</p>
						<div className={`d-flex justify-content-between`}>
							<button
								className={`${s.basket} btn`}
								onClick={() => {
									addAnOrderItem(wok);
									increaseFreeSoucesCounter(2);
								}}
							>
								<img src={Basket} alt="" />В КОРЗИНУ
							</button>
							<span className={`${s.price} font-weight-bold h5`}>
								{wok.price} грн
							</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
	increaseFreeSoucesCounter,
	addAnOrderItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(WokCard);
