import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes } from 'prop-types'
import s from './modal.module.scss'
import Visa from '../../assets/images/basket/visa.png'

const BasketStep_2 = ({ buttonLabel }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className={s.order_btn} onClick={toggle}>{buttonLabel}</Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className={`${s.header} border-0`} toggle={toggle}>ОФОРМЛЕНИЕ НА ДОСТАВКУ</ModalHeader>
        <ModalBody className={s.body}>
          <form>
            <p className="text-white">КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
            <label className="text-white">ИМЯ*
              <input type="text" />
            </label>
            <label className="text-white">ТЕЛЕФОН*
              <input type="text" />
            </label>
            <p className="text-white">ДАННЫЕ ДЛЯ ДОСТАВКИ</p>
            <div>
              <label className="text-white">АДРЕС*
                <input type="text" />
              </label>
              <label className="text-white">№ДОМ*
                <input type="text" />
              </label>
              <label className="text-white">ЭТАЖ
                <input type="text" />
              </label>
              <label className="text-white">№ КВ.
                <input type="text" />
              </label>
              <label className="text-white">
                <span>КОММАНТАРИЙ К ЗАКАЗУ</span>
                <small>домофон, код двери или другие предложения  и пожелания по заказу</small>
                <input type="text" />
              </label>
              <div className="text-white">
                <span>ВРЕМЯ ПОЛУЧЕНИЯ</span>
                <label>
                  <input type="radio" />
                ВЫБРАТЬ ВРЕМЯ</label>
                <label>
                  <input type="radio" />
                КАК МОЖНО СКОРЕЕ</label>
                <label>
                  <input type="datetime" />
                </label>
              </div>
              <div className="text-white">
                <label>
                  <span>НАЛИЧНЫМИ</span>
                  <small>Наличными у курьера при получении заказа</small>
                  <input type="radio" />
                </label>
                <label>
                  <span>БАНКОВСКОЙ КАРТОЙ</span>
                  <small>Картой через терминал при получении заказа</small>
                  <input type="radio" />
                </label>
                <label>
                  <span>ОНЛАЙН ОПЛАТА</span>
                  <img src={Visa} alt="visa / master card" />
                  <input type="radio" />
                </label>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter className={`${s.footer} border-0`}>
          <button onClick={toggle} className={s.total_sum}>
            НАЗАД</button>
          <span className={s.total_sum}>
            ИТОГО: 1499 грн
          </span>
          <button className={s.order_btn}>ЗАКАЗАТЬ</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
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
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  innerRef: PropTypes.object,
  unmountOnClose: PropTypes.bool,
  returnFocusAfterClose: PropTypes.bool
}

export default BasketStep_2;