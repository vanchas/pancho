import React, { useState } from 'react'
import s from './cabinet.module.scss'
import Man from '../../assets/images/signs/man.png'
import Woman from '../../assets/images/signs/woman.png'

export default function UserAbout() {
  const [activeBtn, setActiveBtn] = useState('male');

  return (
    <div className={`py-4 ${s.user_about_form}`}>
      <form className="container">
        <fieldset className="form-group">
          <label className="form-group">
            Имя
            <input type="text" className="form-control mb-2" />
          </label>
          <label className="form-group">
            День рождение
            <input type="text" className="form-control" />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label className="form-group">
            Номер телефона
            <input type="text" className="form-control" />
            <div></div>
            <small className="form-text">Номер телефона будет использоваться для в хода в личный кабинет</small>
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label className="form-group">
            Е-mail
            <input type="text" className="form-control" />
            <div></div>
            <small className="form-text">Для восстановления пароля</small>
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label className="form-group">
            Изменение пароля
            <input type="text" className="form-control" />
            <div></div>
            <small className="form-text">Пароль должен содержать как буквы так и цифры, и состоять минимум из 6 символов</small>
          </label>
        </fieldset>
        <div className={`${s.gender} form-group`}>
          <span>Пол</span>
          <label className={activeBtn === 'male' ? s.activeBtn : ''}>
            <img src={Man} alt="male" />
            <input type="radio" value="male" name="gender" onChange={() => setActiveBtn('male')} />МУЖСКОЙ
          </label>
          <label className={activeBtn === 'female' ? s.activeBtn : ''}>
            <img src={Woman} alt="female" />
            <input type="radio" value="female" name="gender" onChange={() => setActiveBtn('female')} />ЖЕНСКИЙ
          </label>
        </div>
        <div className="pt-3">
          <button type="submit" className="btn mx-auto d-block">ОБНОВИТЬ ПРОФИЛЬ</button>
        </div>
      </form>
    </div>
  )
}
