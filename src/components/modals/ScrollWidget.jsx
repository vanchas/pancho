import React, { useEffect, useRef, useState } from "react";
import s from './scroll.module.scss'

function ScrollWidget(props) {
  const [showScroll, setShowScroll] = useState(false)
  const $arrow = useRef(null)

  const checkScrollTop = () => {
    if (window.pageYOffset > 1000) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 1000) {
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(() => {
      setShowScroll(false)
    }, 1000)
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', checkScrollTop)
    }
  }, [])

  return (
    showScroll && <div
      ref={$arrow}
      className={s.scroll_widget_btn}
      onClick={scrollTop}>
      <i className="fas fa-arrow-circle-up" />
    </div>
  );
}

export default ScrollWidget;