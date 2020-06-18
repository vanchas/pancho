import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PropTypes } from "prop-types";
import s from "./modal.module.scss";
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

const BasketStep_2 = ({ buttonLabel }) => {
  const [modal, setModal] = useState(true);
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
          ОФОРМЛЕНИЕ НА ДОСТАВКУ
				</ModalHeader>
        <ModalBody className={s.body}>
          <form onSubmit={submitHandler}>
            <p className="text-white font-weight-bold mb-2">
              КОНТАКТНАЯ ИНФОРМАЦИЯ
						</p>
            <div className={s.contacts_block}>
              <label className="text-white">
                ИМЯ*
								<input type="text" className="form-control" />
              </label>
              <label className="text-white">
                ТЕЛЕФОН*
								<input type="text" className="form-control" />
              </label>
            </div>
            <p className="text-white font-weight-bold mt-3 mb-2">
              ДАННЫЕ ДЛЯ ДОСТАВКИ
						</p>
            <div className={s.address_block}>
              <label className="text-white">
                <span> АДРЕС*</span>
                <input type="text" className="form-control" />
              </label>
              <label className={s.address_label}>
                <span> №ДОМ*</span>
                <input type="text" className="form-control" />
              </label>
              <label className={s.address_label}>
                <span> ЭТАЖ</span>
                <input type="text" className="form-control" />
              </label>
              <label className={s.address_label}>
                <span> № КВ.</span>
                <input type="text" className="form-control" />
              </label>
              <label className={s.comment_label}>
                <span>КОММАНТАРИЙ К ЗАКАЗУ</span>
                <textarea type="text" className="form-control" />
                <small>
                  домофон, код двери или другие предложения и пожелания по
                  заказу
								</small>
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
        <ModalFooter className={`${s.footer} border-0`}>
          <button onClick={toggle} className={s.total_sum}>
            НАЗАД
					</button>
          <span className={s.total_sum}>ИТОГО: 1499 грн</span>
          <button type="submit" className={`font-weight-bold ${s.order_btn}`}>ЗАКАЗАТЬ</button>
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

export default BasketStep_2;
