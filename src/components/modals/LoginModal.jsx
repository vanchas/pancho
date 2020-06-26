import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, Label, CardImg } from 'reactstrap';
import { PropTypes } from 'prop-types'
import s from './modal.module.scss'
import Facebook from '../../assets/images/facebook.png'
import Google from '../../assets/images/google.png'
import { useRouter } from 'next/router'

const ModalExample = ({ buttonLabel,
  className, active }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  // login
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginWarning, setLoginWarning] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
// registration
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [passwordR, setPasswordR] = useState('');
const [registrationWarning, setRegistrationWarning] = useState('');

  const toggle = () => setModal(!modal);

  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const loginSubmitHandler = e => {
    e.preventDefault();
    if (login.length && password.length) {
      setLoginWarning('');
      router.push('/cabinet.html');
      toggle();
    } else {
      setLoginWarning('WARNING !!!');
    }
  }

  const registrationSubmitHandler = e => {
    e.preventDefault();
    if (name.length && passwordR.length && email.length && phone.toString().length) {
      setRegistrationWarning('');
      router.push('/cabinet.html');
      toggleAll();
    } else {
      setRegistrationWarning('WARNING !!!');
    }
  }

  return (
    <div>
      <Button color="" className={active ? s.activeLink : s.button} onClick={toggle}>{buttonLabel}</Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className={`${s.bg_dark} text-white text-center border-0`} >
          ВХОД В ЛИЧНЫЙ КАБИНЕТ
        </ModalHeader>
        <ModalBody className={s.bg_dark}>
          <InputGroup>
            <Input placeholder="Логин" type="text" className={`text-white ${s.bg_dark} mb-4`} onChange={e => setLogin(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="Пароль" type="password" className={`text-white ${s.bg_dark}`} onChange={e => setPassword(e.target.value)} />
          </InputGroup>
          {loginWarning.length
            ? <span className="text-danger">
              {loginWarning}
            </span>
            : null}
          <InputGroup className="d-flex justify-content-between">
            <Label className="pl-4 pt-1 text-white">
              <Input type="checkbox" onChange={() => setRememberMe(!rememberMe)} />
              запомнить меня</Label>
            <a href="#" className="pt-1 text-white">забыли пароль?</a>
          </InputGroup>
          <Button className="mx-auto d-block mb-3 font-weight-bold" color="" style={{ backgroundColor: '#ffed00' }} onClick={loginSubmitHandler}>ВОЙТИ</Button>
          <div className="text-center text-white">ВОЙТИ КАК ПОЛЬЗОВАТЕЛЬ</div>
          <InputGroup className="d-flex justify-content-around pt-3">
            <CardImg src={Facebook} className="w-25" />
            <CardImg src={Google} className="w-25" />
          </InputGroup>
        </ModalBody>
        <ModalFooter className={`${s.bg_dark} text-center border-0 pt-0`}>

          <Button color="" className={`text-white d-block mx-auto`} onClick={toggleNested}><u>регистрация на сайте</u></Button>

          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader className={`border-0 text-white d-block text-center ${s.bg_dark}`}>РЕГИСТРАЦИЯ</ModalHeader>
            <ModalBody className={`py-0 ${s.bg_dark}`}>
              <InputGroup>
                <Input placeholder="Имя" type="text" className={`text-white ${s.bg_dark} mb-4`} onChange={e => setName(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Телефон" type="number" className={`text-white ${s.bg_dark} mb-4`} onChange={e => setPhone(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <Input placeholder="E-mail" type="email" className={`text-white ${s.bg_dark} mb-4`} onChange={e => setEmail(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Пароль" type="password" className={`text-white ${s.bg_dark} mb-4`} onChange={e => setPasswordR(e.target.value)} />
              </InputGroup>
            </ModalBody>
            <ModalFooter className={`pt-0 border-0 ${s.bg_dark}`}>
            {registrationWarning.length
            ? <span className="text-danger">
              {registrationWarning}
            </span>
            : null}
              <Button color="" className="d-block mx-auto" style={{ backgroundColor: '#ffed00' }} onClick={registrationSubmitHandler}>Продолжить</Button>
            </ModalFooter>
          </Modal>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;

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
