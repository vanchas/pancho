import React from "react";
import PizzaCard from "./PizzaCard";
import s from "./pizza.module.scss";

export default function PizzaList({ addAnOrderItem, pizzas }) {
  return (
    <ul className={s.pizzas_list}>
      {pizzas.map((p, i) => (
        <li key={i}>
          <PizzaCard
            pizza={p}
            addAnOrderItem={addAnOrderItem} />
        </li>
      ))}
    </ul>
  );
}
