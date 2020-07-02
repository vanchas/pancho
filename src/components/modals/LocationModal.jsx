import React, { useState, useEffect } from 'react'
import s from './location.module.scss'

export default function LocationModal({ city }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  const hideModal = () => {
    setShow(false);
  }

  return (
    <>
      {show &&
        <div className={s.modal}>
          <h4>Ваш город Славянск?</h4>
          <div className={s.btn_group}>
            <span className="btn"
              onClick={hideModal}>Да</span>
            <span className="btn"
              onClick={hideModal}>Нет</span>
          </div>
        </div>
      }
    </>
  )
}
