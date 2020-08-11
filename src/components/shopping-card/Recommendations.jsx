import React, { useState, useEffect } from 'react'
import s from './orders.module.scss'
import $ from 'jquery'

export default function Recommendations({ drinks, addAnOrderItem }) {
  const [firstSlideIndex, setFirstSlideIndex] = useState(1);
  const [secondSlideIndex, setSecondSlideIndex] = useState(2);

  useEffect(() => {
    showSlides(firstSlideIndex);
    showSlides(secondSlideIndex);
  }, [firstSlideIndex, secondSlideIndex]);

  const changeSlides = n => {
    showSlides(setFirstSlideIndex(firstSlideIndex + n));
    showSlides(setSecondSlideIndex(secondSlideIndex + n));
  }

  const showSlides = (n) => {
    var i;
    const slides = $(".slide");
    if (n > slides.length) {
      setFirstSlideIndex(1);
      setSecondSlideIndex(2);
    }
    if (n < 1) {
      setFirstSlideIndex(slides.length - 1);
      setSecondSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      $(slides[i]).css('display', "none");
    }
    $(slides[firstSlideIndex - 1]).css('display', "grid");
    $(slides[secondSlideIndex - 1]).css('display', "grid");
  }

  return (
    <>
      {drinks.length ? <div>
        <h5 className={s.recommendations_heading}>РЕКОМЕНДУЕМ ПОПРОБОВАТЬ</h5>
        <div className="d-flex">
          <span className={s.arrow} onClick={() => changeSlides(-1)}>&#8249;</span>
          <ul className={s.recommendations_list}>
            {drinks.map((d, i) => (
              <li key={i} className="slide">
                <div className={s.rec_image}>
                  <img src={d.image} alt={d.name} />
                </div>
                <div className={s.to_basket_btn}>
                  <span onClick={(e) => {
                    e.target.style.backgroundColor = '#ffb025'
                    addAnOrderItem({
                      ...d, price: d.price.S ? d.price.S : d.price
                    });
                  }}>В КОРЗИНУ</span>
                </div>
                <div className={s.rec_price}>{d.price.S ? d.price.S : d.price} грн</div>
              </li>
            ))}
          </ul>
          <span className={s.arrow} onClick={() => changeSlides(1)
          }>&#8250;</span>
        </div>
      </div> : null}
    </>
  )
}
