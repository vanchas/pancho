import React, {useState} from 'react'
import s from './reviews.module.scss'
import Like from '../../assets/images/like.png'
import Diss from '../../assets/images/diss.png'
import {addReview} from '../../redux/actions/actions'
import {connect} from "react-redux";

function ReviewForm(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [like, setLike] = useState(null);
    const [photo, setPhoto] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        props.addReview({name, phone, message, like, photo});
        setName('')
        setPhone('')
        setMessage('')
        setPhoto('')
        setLike(null)
    }

    return (
        <div className={s.review_form}>
            <form onSubmit={submitHandler}>
                <label className={s.name}>Имя
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)} required className="form-control"/>
                </label>
                <label className={s.phone}>Телефон
                    <input value={phone} type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" required/>
                </label>
                <div className={s.assessment}>
                    <label className={like ? s.activeBtnLike : ''}>
                        <img src={Like} alt="like"/>
                        <input type="radio" value="like" name="assessment" onChange={(e) => setLike(true)} />
                    </label>
                    <label className={!like ? s.activeBtnDislike : ''}>
                        <img src={Diss} alt="dislike"/>
                        <input type="radio" value="dislike" name="assessment" onChange={(e) => setLike(false)} />
                    </label>
                </div>
                <label className={s.message}>Сообщение
                    <textarea value={message} rows="5" onChange={e => setMessage(e.target.value)} className="form-control" required />
                </label>
                <label className={s.photo}>
                    <input value={photo} type="file" className="form-control-file" onChange={e => setPhoto(e.target.value)}/>
                </label>
                <label className={s.submit}>
                    <button type="submit">ОТПРАВИТЬ</button>
                </label>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {
    addReview
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
