import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PropTypes } from "prop-types";
import s from "./modal.module.scss";
import Visa from "../../assets/images/basket/visa.png";
import Calendar from "../../assets/images/basket/calendar.png";
import Clock from "../../assets/images/basket/clock.png";
import Map from '../../assets/images/basket/map.png';
import Present from '../../assets/images/basket/present.png';

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

const BasketStep_2_Pickup = ({ buttonLabel, ordersAmount }) => {
  const [modal, setModal] = useState(false);
  const today = new Date();
  let [date, setDate] = useState(today.getDate() ? today.getDate() : "01");
  let [iterator, setIterator] = useState(0);
  const [month, setMonth] = useState(monthes[iterator]);
  const [hours, setHour] = useState(today.getHours() + 2);
  const [min, setMin] = useState("00");
  const [payment, setPayment] = useState("");
  const [timeToDelivery, setTimeToDelivery] = useState('asap');
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [house, setHouse] = useState('');
  const [floor, setFloor] = useState('');
  const [flat, setFlat] = useState('');

  const toggle = () => setModal(!modal);

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
    <div>
      <Button className={s.order_btn} onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className={`${s.header} border-0`} toggle={toggle}>
          ОФОРМЛЕНИЕ НА САМОВЫВОЗ
				</ModalHeader>
        <ModalBody className={s.body}>
          <form onSubmit={submitHandler}>
            <p className="text-white font-weight-bold mb-2">
              САМОВЫВОЗ ПО АДРЕСУ:
						</p>
            <p className="text-white mb-2">
              г. Славянск, ул. Шевченко, 10 (бывший 19-й магазин)
						</p>
            <div className={s.map_image_block}>
              <img src={Map} alt="г. Славянск, ул. Шевченко, 10 (бывший 19-й магазин)" />
            </div>
            <div className={s.contacts_block}>
              <label className="text-white">
                ИМЯ*
                <input type="text" required
                  className="form-control"
                  onChange={e => setName(e.target.value)} />
              </label>
              <label className="text-white">
                ТЕЛЕФОН*
                <input type="number" required
                  className="form-control"
                  onChange={e => setPhone(e.target.value)} />
              </label>
            </div>
            <p className="font-weight-bold mb-2 mt-3 text-white">
              ВРЕМЯ ПОЛУЧЕНИЯ
						</p>
            <div className={`${s.time_block} text-white`}>
              <label className={s.choose_time_label}>
                <input type="radio" name="time" onChange={() => setTimeToDelivery('choose')} />
								ВЫБРАТЬ ВРЕМЯ
							</label>
              <label className={s.choose_asap_label}>
                <input type="radio" name="time" onChange={() => setTimeToDelivery('asap')} />
								КАК МОЖНО СКОРЕЕ
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
        </ModalBody>
        <ModalFooter className={`${s.footer} border-0 pt-0`}>
          <div className={s.footer_bonus_block}>
            <span>БОНУСНЫЙ СЧЕТ</span>
            <span>332</span>
            <img src={Present} alt="" />
            <span><i>&#8250;</i> <u>СНЯТЬ БОНУСЫ</u></span>
          </div>
          <div className={s.footer_buttons}>
            <button onClick={toggle}
              className={s.total_sum}>
              <i>&#10157;</i> НАЗАД
					  </button>
            <span className={s.total_sum}>ИТОГО: {ordersAmount} грн</span>
            <button type="submit" className={`font-weight-bold ${s.order_btn}`}>ЗАКАЗАТЬ</button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
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

export default BasketStep_2_Pickup;
