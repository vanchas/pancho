import React, { useState } from "react";
import s from "./bill.module.scss";
import BillboardImage from "../../assets/images/compressed/billboard.png";
import Filter from "../../assets/images/signs/filter_lines.png";
import Search from "../../assets/images/signs/search.png";

export default function Billboard() {
	const [searchValue, setSearchValue] = useState(null);

	const inputHandler = (value) => {
		setSearchValue(value);
	};

	return (
		<div>
			<div className={s.billboard}>
				<img
					src={BillboardImage}
					alt="ДОСТАВЛЯЕМ ВКУСНОЕ УДОВОЛЬСТВИЕ"
					className="w-100"
				/>
			</div>
			<div className={s.search_control}>
				<div>
					<img src={Search} alt="" className={s.input_image} />
					<input
						type={`text`}
						className={s.input}
						onChange={inputHandler}
						placeholder={`поиск по меню`}
					/>
				</div>
				<div>
					<img src={Filter} alt="" className={s.select_image} />
					<select className={s.select}>
						<option hidden>фильтр</option>
						<option>Цена от большей</option>
						<option>Цена от меньшей</option>
					</select>
				</div>
			</div>
		</div>
	);
}
