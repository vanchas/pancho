import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes, string } from 'prop-types'
import s from './modal.module.scss'
import { useRouter } from 'next/router'
import Widget from '../../assets/images/basket/widget.png';
import OrdersList from '../basket/OrdersList'
import { connect } from 'react-redux';
import Person from '../../assets/images/basket/person.png';
import Car from '../../assets/images/basket/car.png';
import SoucesList from '../basket/SoucesList';
import Recommendations from '../basket/Recommendations';

const ModalExample = ({ orders, souces, drinks }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <div>
      <Button color="" className={`p-0 ${s.basket_widget}`} onClick={toggle}>
        <img src={Widget} alt="" />
        <span>0 грн</span>
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className={`border-0 ${s.header}`} >
          В КОРЗИНЕ
        </ModalHeader>

        <ModalBody className={s.body}>
          <OrdersList orders={orders} />
          <div className={s.delivery_control}>
            <div className={s.delivery_control_item}>
              <label>
                <img src={Person} alt="" />
                <input type="radio" name="delivery" />
                <span>Самовывоз <br />
                  <small>в пиццерии (скидка -5%)</small>
                </span>
              </label>
            </div>
            <div className={s.delivery_control_item}>
              <label>
                <img src={Car} alt="" />
                <input type="radio" name="delivery" />
                <span>Доставка <br />
                  <small>на определенный адрес</small>
                </span>
              </label>
            </div>
          </div>
          <SoucesList souces={souces} />
          <Recommendations drinks={drinks} />
        </ModalBody>

        <ModalFooter className={`d-flex justify-content-around border-0 pt-0 pb-3 ${s.footer}`}>
          <button className={`${s.total_sum}`}>ИТОГО: 499 грн</button>
          <button className={`${s.order_btn}`}>ОФОРМИТЬ ЗАКАЗ</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  const orders = state.user.orders;
  const souces = state.products.souces;
  const drinks = state.products.drinks;
  return { orders, souces, drinks }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);

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
