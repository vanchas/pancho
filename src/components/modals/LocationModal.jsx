import React, { useState, useEffect } from 'react'
import s from './location.module.scss'
import { connect } from "react-redux";
import {setHeaderPhone} from "../../redux/actions/actions";

const cities = ['Славянск', 'Краматорск', 'Бахмут']

function LocationModal({ city, setHeaderPhone }) {
  const [show, setShow] = useState(true);
  const [chooseCity, setChooseCity] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  const hideModal = () => {
    setShow(false);
  }

  const chooseCityHandler = (city) => {
    setHeaderPhone(city)
    hideModal()
  }

  return (
    <>
      {show &&
        <div className={s.modal}>
          {!chooseCity ? <>
            <h4>Ваш город Славянск?</h4>
          <div className={s.btn_group}>
            <span className="btn"
              onClick={hideModal}>Да</span>
            <span className="btn"
              onClick={() => setChooseCity(true)}>Нет</span>
          </div>
          </>
          : <>
              <h4>Выберите Ваш город</h4>
              <div>
                {cities.map((c, i) => (
                  <label key={i} className={`d-block`}>
                    <input
                      defaultChecked={i === 0 ?? false}
                      type={`radio`}
                      value={c}
                      className={`mr-2`}
                      name={"city"}
                      onChange={e => chooseCityHandler(e.target.value)}
                    />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </>}
        </div>
      }
    </>
  )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = {
  setHeaderPhone
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationModal)
