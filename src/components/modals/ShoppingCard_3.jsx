import React, { useState } from "react";
import s from "./modal.module.scss";
import Visa from "../../assets/images/basket/visa.png";
import Calendar from "../../assets/images/basket/calendar.png";
import Clock from "../../assets/images/basket/clock.png";
import Present from '../../assets/images/basket/present.png';
import Bonus from "./Bonus";

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

const ShoppingCard_3 = ({ ordersAmount, open }) => {
  const today = new Date();
  let [date, setDate] = useState(today.getDate() ? today.getDate() : "01");
  let [iterator, setIterator] = useState(0);
  const [month, setMonth] = useState(monthes[iterator]);
  const [hours, setHour] = useState(today.getHours() + 2);
  const [min, setMin] = useState("00");
  const [payment, setPayment] = useState("");
  const [timeToDelivery, setTimeToDelivery] = useState('asap');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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

  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <div className={`${s.shopping_card_3}`}>
      <div className={s.background} onClick={open} />

      <div className={`${s.header} border-0`}>
        ОФОРМЛЕНИЕ НА САМОВЫВОЗ
        <span onClick={open} style={{color: '#ffed00'}}>
            <i className="fas fa-times" />
        </span>
      </div>
      <div className={s.body}>
        <form onSubmit={submitHandler}>
          <p className="text-white font-weight-bold mb-2">
            САМОВЫВОЗ ПО АДРЕСУ:
						</p>
          <p className="text-white mb-2">
            г. Славянск, ул. Шевченко, 10 (бывший 19-й магазин)
						</p>
          <div className={s.map_image_block}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5892450269225!2d37.59028601567464!3d48.86604257928825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df84ccb610c4df%3A0x173e9ee0872edcf6!2z0L_QtdGALiDQqNC10LLRh9C10L3QutC-LCDQodC70LDQstGP0L3RgdC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4NDEyMg!5e0!3m2!1sru!2sua!4v1592821680195!5m2!1sru!2sua" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" className={s.map} />
          </div>
          <div className={s.contacts_block}>
            <label className="text-white">
              ИМЯ*
                <input type="text" required
                value={name}
                className="form-control"
                onChange={e => setName(e.target.value)} />
            </label>
            <label className="text-white">
              ТЕЛЕФОН*
                <input type="text" required
                value={phone}
                className="form-control"
                onChange={e => setPhone(e.target.value)} />
            </label>
          </div>
          <p className="font-weight-bold mb-2 mt-3 text-white">
            ВРЕМЯ ПОЛУЧЕНИЯ
						</p>
          <div className={`${s.time_block} text-white`}>
            <label className={s.choose_asap_label}>
              <input type="radio" name="time" onChange={() => setTimeToDelivery('asap')} checked={timeToDelivery === 'asap'} />
								КАК МОЖНО СКОРЕЕ
							</label>
            <label className={s.choose_time_label}>
              <input type="radio" name="time" onChange={() => setTimeToDelivery('choose')} />
								ВЫБРАТЬ ВРЕМЯ
							</label>
            {timeToDelivery === 'choose' ?
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
                    min="1"
                    max="59"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </label>
              </div> : null}
          </div>
          <p className="text-white font-weight-bold mb-2 mt-3">
            СПОСОБ ОПЛАТЫ
						</p>
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
      <div className={`${s.footer} border-0 pt-0 pb-5`}>
        <div className={s.footer_bonus_block}>
          <span>БОНУСНЫЙ СЧЕТ</span>
          <span>332</span>
          <img src={Present} alt="" />
          <Bonus />
        </div>
        <div className={`pb-3 ${s.footer_buttons}`}>
          <button
            className={s.total_sum}
            onClick={open}>
            <i>&#10157;</i> НАЗАД
					  </button>
          <span className={s.total_sum}>ИТОГО: {ordersAmount} грн</span>
          <button type="submit" className={`font-weight-bold ${s.order_btn}`}>ЗАКАЗАТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard_3;
