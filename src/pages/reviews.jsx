import React, { useEffect } from 'react'
import s from '../components/reviews/reviews.module.scss';
import ReviewsList from '../components/reviews/ReviewsList';
import ReviewsForm from '../components/reviews/ReviewsForm';
import { getReviews } from '../redux/actions/actions'
import { connect } from 'react-redux';

function Reviews({ getReviews, reviews }) {

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={s.revies_page}>
      <h3 className={s.revies_page_heading}>ОТЗЫВЫ</h3>
      <ul className={s.rules_list}>
        <li><p>Уважаемые клиенты, ваш обратная связь помогает нам совершенствоваться каждый день! Пожалуйста, оставьте свой отзыв о работе нашей службы доставки пиццы.</p></li>
        <li><p>Мы принимаем к сведению каждое обращение наших клиентов и на каждый из них стараемся реагировать.</p></li>
        <li><p>Если вы хотите, чтобы вашу жалобу рассмотрели и приняли соответствующие меры, указывайте, пожалуйста, на сайте точный адрес доставки и номер телефона с именем.</p></li>
        <li><p>Если у вас есть замечания к качеству продукта, сразу после доставки сообщите об этом курьера или оператора по телефону 095-000-11-95, чтобы мы могли разобраться в ситуации оперативно.</p></li>
      </ul>
      <ReviewsForm />
      <ReviewsList reviews={reviews} />
    </div>
  )
}

const mapStateToProps = state => {
  const reviews = state.user.reviews && state.user.reviews.length ? state.user.reviews : null;
  return { reviews }
}

const mapDispatchToProps = {
  getReviews
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
