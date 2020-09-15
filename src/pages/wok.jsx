import React, { useEffect } from 'react'
import s from '../components/wok/wok.module.scss'
import Billboard from '../components/billboard/Billboard'
import { connect } from 'react-redux'
import { getWoks, addAnOrderItem } from '../redux/actions/actions'
import WokList from "../components/wok/WokList";
import scrollPage from "../utils/scroll-page";

const wokTypes = [
    {title: "WOK С ОВОЩАМИ", type: 'vegetarian'},
    {title: "WOK С КУРИЦЕЙ", type: 'chicken'},
    {title: "WOK С ТЕЛЯТИНОЙ", type: 'beef'},
    {title: "WOK С ЛАНГУСТИНАМИ", type: 'langust'},
    {title: "WOK С МОРЕПРОДУКТАМИ", type: 'sea'}
    ]

function Wok({ getWoks, woks }) {

  useEffect(() => {
    getWoks()

    const timer = setTimeout(() => {
      scrollPage(650)
    }, 100)

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={s.wok_page}>
      <Billboard />
      <div style={{ maxWidth: '1667px', margin: '0 auto' }}>
          {wokTypes.map((type, i) => (
              <WokList
                  key={i}
                  woks={woks}
                  addAnOrderItem={addAnOrderItem}
                  title={type.title}
                  type={type.type}
              />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const woks = state.products.wok;
  return { woks }
}

const mapDispatchToProps = {
  getWoks, addAnOrderItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Wok)
