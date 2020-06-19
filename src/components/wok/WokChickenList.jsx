import React, { useState } from "react";
import WokCard from "./WokCard";
import s from "./wok.module.scss";

export default function WokChickenList({ woks, addAnOrderItem }) {
	return (
		<div>
			<h2 className={s.wok_list_heading}>ВОК С КУРИЦЕЙ</h2>
			<ul className={s.wok_list}>
				{woks.length &&
					woks.map((w, i) => (
						<li key={i}>
							<WokCard
								wok={w}
                addAnOrderItem={addAnOrderItem}
							/>
						</li>
					))}
			</ul>
		</div>
	);
}
