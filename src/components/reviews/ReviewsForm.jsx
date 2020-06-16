import React, { useState } from 'react'
import s from './reviews.module.scss'
import Like from '../../assets/images/like.png'
import Diss from '../../assets/images/diss.png'
import { addReview } from '../../redux/actions/actions'

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [like, setLike] = useState(null);
  const [photo, setPhoto] = useState('');

  const submitHandler = () => {
    console.log(like);

    addReview({ name, phone, message, like, photo });
  }

  return (
    <div className={s.review_form}>
      <form onSubmit={submitHandler}>
        <label className={s.name}>Имя
            <input type="text" onChange={(e) => setName(e.target.value)} required className="form-control" />
        </label>
        <label className={s.phone}>Телефон
            <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" required />
        </label>
        <div className={s.assessment}>
          <label className={like ? s.activeBtn : ''}>
            <img src={Like} alt="like" />
            <input type="radio" value="like" name="assessment" onChange={(e) => setLike(true)} required />
          </label>
          <label className={!like ? s.activeBtn : ''}>
            <img src={Diss} alt="dislike" />
            <input type="radio" value="dislike" name="assessment" onChange={(e) => setLike(false)} required />
          </label>
        </div>
        <label className={s.message}>Сообщение
            <textarea rows="5" onChange={e => setMessage(e.target.value)} className="form-control" required></textarea>
        </label>
        <label className={s.photo}>
          <input type="file" className="form-control-file" onChange={e => setPhoto(e.target.value)} />
        </label>
        <label className={s.submit}>
          <button type="submit">ОТПРАВИТЬ</button>
        </label>
      </form>
    </div>
  )
}
