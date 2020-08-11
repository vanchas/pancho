import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import BonusImg from '../../assets/images/bonus-2-01.svg'
import s from "./modal.module.scss";

export default function Bonus(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submitHandler = e => {
    e.preventDefault()
    toggle()
  }

  return (
    <div>
      <Button color="" className={`p-0`} onClick={toggle}>
        <span><i>&#8250;</i> <u>СНЯТЬ БОНУСЫ</u></span>
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <div className={s.bonus_modal}>
          <div className={s.bonus_modal_content}>
            <h5>ОПЛАТА БОНУСАМИ</h5>
              <div>
                <img src={BonusImg} alt={``} className={s.bonus_image} />
              </div>

            <div>На счету 332 грн</div>

            <form onSubmit={submitHandler}>
              <label className={`d-flex pt-1 w-100 justify-content-center align-items-center`}>
                списать
                <input type={`number`} maxLength={``} className={`ml-2 pl-1`} />
              </label>
              <div className={`mb-2`}>(от 1 до 332 грн)</div>
              <div className={`py-1`}>
                <button type={`submit`} className={s.submit_btn}>ПРИМЕНИТЬ</button>
                <button onClick={toggle} className={s.cancel_btn}>ОТМЕНА</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

