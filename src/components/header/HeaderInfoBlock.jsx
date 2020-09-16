import React from "react";
import s from "./header.module.scss";
import Brand from "../../assets/images/brand.png";
import Clock from "../../assets/images/signs/watch-01.svg";
import Location from "../../assets/images/signs/point-01.svg";
import Phone from "../../assets/images/signs/phone-01.svg";
import Link from "next/link";
import { connect } from "react-redux";
import { setHeaderPhone } from "../../redux/actions/actions";

const cities = ["Славянск", "Краматорск", "Бахмут"];

function HeaderInfoBlock(props) {
	return (
		<div className={s.header_info_block}>
			<div className={s.header_info_block_item}>
				<Link href="/pizza">
					<a>
						<img src={Brand} alt="Pancho" className={s.brand_logo} />
					</a>
				</Link>
			</div>
			<div className={s.header_info_block_item}>
				<h3 className={s.delivery}>БЕСПЛАТНАЯ ДОСТАВКА ПИЦЦЫ</h3>
				<p className={s.delivery_time}>Среднее время доставки 55 минут</p>
			</div>
			<div className={`${s.watch_block}`}>
				<img src={Clock} alt="" className={s.watch_image} />
				<p className={s.work_time}>ПН-СБ &nbsp; 11.00-22.00</p>
				<p className={s.work_time}>ВС &nbsp; 12.00-22.00</p>
			</div>
			<div className={s.header_info_block_item_location}>
				<img src={Location} alt="" className={s.location_image} />
				<p>Ваш город</p>
				<select
					className={s.city_select}
					onChange={(e) => props.setHeaderPhone(e.target.value)}
				>
					<option value={props.currentLocation} hidden>
						{props.currentLocation}
					</option>
					{cities.map((c, i) => (
						<option value={c} key={i}>
							{c}
						</option>
					))}
				</select>
			</div>
			<div className={`d-flex ${s.header_info_block_item}`}>
				<img src={Phone} alt="" className={s.phone_image} />
				<a
					href={`tel:+38${props.phone.split("-").join("")}`}
					className={`${s.phone} btn`}
				>
					{props.phone}
				</a>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	phone: state.user.headerSelectPhone,
	currentLocation: state.user.currentLocation,
});
const mapDispatchToProps = {
	setHeaderPhone,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfoBlock);
