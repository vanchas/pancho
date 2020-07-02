import React, { useState, useEffect } from "react";
import s from "./modal.module.scss";
import $ from 'jquery';
import Visa from "../../assets/images/basket/visa.png";
import Calendar from "../../assets/images/basket/calendar.png";
import Clock from "../../assets/images/basket/clock.png";

const monthes = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const ShoppingCard_2 = ({ ordersAmount, open }) => {
  const today = new Date();
  let [date, setDate] = useState(today.getDate() ? today.getDate() : "01");
  let [iterator, setIterator] = useState(0);
  const [month, setMonth] = useState(monthes[iterator]);
  const [hours, setHour] = useState(today.getHours() + 2);
  const [min, setMin] = useState("00");
  const [payment, setPayment] = useState("");
  const [timeToDelivery, setTimeToDelivery] = useState("asap");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [house, setHouse] = useState("");
  const [floor, setFloor] = useState("");
  const [flat, setFlat] = useState("");

  const incrementMonth = () => {
    if (iterator === 11) {
      setIterator(0);
      setMonth(monthes[0]);
    } else {
      setIterator(1 + iterator++);
      setMonth(monthes[iterator]);
    }
  };
  const decrementMonth = () => {
    if (iterator === 0) {
      setIterator(11);
      setMonth(monthes[11]);
    } else {
      setIterator(iterator-- - 1);
      setMonth(monthes[iterator]);
    }
  };
  const incrementDate = () => {
    if (date === 31) {
      setDate(1);
    } else {
      setDate(date++ + 1);
    }
  };
  const decrementDate = () => {
    if (date === 1) {
      setDate(31);
    } else {
      setDate(date-- - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${s.shopping_card_2}`} >
      <div className={`${s.header} border-0`}>
        ОФОРМЛЕНИЕ НА ДОСТАВКУ
        <span onClick={open}>&#10006;</span>
      </div>
      <div className={s.body}>
        <form onSubmit={submitHandler}>
          <p className="text-white font-weight-bold mb-2">
            КОНТАКТНАЯ ИНФОРМАЦИЯ
					</p>
          <div className={s.contacts_block}>
            <label className="text-white">
              ИМЯ*
							<input
                value={name}
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="text-white">
              ТЕЛЕФОН*
							<input
                value={phone}
                type="text"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <p className="text-white font-weight-bold mt-3 mb-2">
            ДАННЫЕ ДЛЯ ДОСТАВКИ
					</p>
          <div className={s.address_block}>
            <label className="text-white">
              <span> АДРЕС*</span>
              <input
                value={address}
                type="text"
                className="form-control ml-1"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label className={s.address_label}>
              <span> №ДОМ*</span>
              <input
                value={house}
                type="text"
                className="form-control"
                onChange={(e) => setHouse(e.target.value)}
              />
            </label>
            <label className={s.address_label}>
              <span> ЭТАЖ</span>
              <input
                value={floor}
                type="text"
                className="form-control"
                onChange={(e) => setFloor(e.target.value)}
              />
            </label>
            <label className={s.address_label}>
              <span> № КВ.</span>
              <input
                value={flat}
                type="text"
                className="form-control"
                onChange={(e) => setFlat(e.target.value)}
              />
            </label>
            <label className={s.comment_label}>
              <span>КОММАНТАРИЙ К ЗАКАЗУ</span>
              <textarea
                value={comment}
                type="text"
                className="form-control"
                onChange={(e) => setComment(e.target.value)}
              />
              <small>
                домофон, код двери или другие предложения и пожелания по заказу
							</small>
            </label>
          </div>
          <p className="font-weight-bold mb-2 mt-3 text-white">
            ВРЕМЯ ПОЛУЧЕНИЯ
					</p>
          <div className={`${s.time_block} text-white`}>
            <label className={s.choose_asap_label}>
              <input
                type="radio"
                name="time"
                onChange={() => setTimeToDelivery("asap")}
              />
							КАК МОЖНО СКОРЕЕ
						</label>
            <label className={s.choose_time_label}>
              <input
                type="radio"
                name="time"
                onChange={() => setTimeToDelivery("choose")}
              />
							ВЫБРАТЬ ВРЕМЯ
						</label>
            {timeToDelivery === "choose" ? (
              <div className={s.date_time_control}>
                <label className={s.date_label}>
                  <span className={s.up} onClick={incrementDate}>
                    &#8249;
									</span>
                  <img src={Calendar} alt="" />
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`${s.calendar_input}`}
                  />
                  <span className={s.down} onClick={decrementDate}>
                    &#8249;
									</span>
                </label>
                <label className={s.month_label}>
                  <span className={s.up} onClick={incrementMonth}>
                    &#8249;
									</span>
                  <span className={s.month}>{month}</span>
                  <span className={s.down} onClick={decrementMonth}>
                    &#8249;
									</span>
                </label>
                <label className={s.time_label}>
                  <img src={Clock} alt="" />
                  <input
                    type="number"
                    min="1"
                    max="24"
                    value={hours}
                    onChange={(e) => setHour(e.target.value)}
                  />
                  <span>:</span>
                  <input
                    type="number"
                    min="0"
                    max="45"
                    value={min}
                    step="15"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </label>
              </div>
            ) : null}
          </div>
          <p className="text-white font-weight-bold mb-2 mt-3">СПОСОБ ОПЛАТЫ</p>
          <div className={`${s.payment_block} text-white`}>
            <label className={payment === "cash" ? s.activePayment : ""}>
              <span>НАЛИЧНЫМИ</span>
              <small>Наличными у курьера при получении заказа</small>
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("cash")}
              />
            </label>
            <label className={payment === "card" ? s.activePayment : ""}>
              <span>БАНКОВСКОЙ КАРТОЙ</span>
              <small>Картой через терминал при получении заказа</small>
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("card")}
              />
            </label>
            <label className={payment === "online" ? s.activePayment : ""}>
              <span>ОНЛАЙН ОПЛАТА</span>
              <img src={Visa} alt="visa / master card" />
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("online")}
              />
            </label>
          </div>
        </form>
      </div>
      <div className={`${s.footer} border-0 pt-3`}>
        <div className={s.footer_buttons}>
          <button className={s.total_sum} onClick={open}>
            <i>&#10157;</i> НАЗАД
					</button>
          <span className={s.total_sum}>ИТОГО: {ordersAmount} грн</span>
          <button type="submit" className={`font-weight-bold ${s.order_btn}`}>
            ЗАКАЗАТЬ
					</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard_2;
