import React, {useEffect} from 'react'
import s from './cabinet.module.scss'
import Transaction from './Transaction'
import {getHistory} from "../../redux/actions/actions";
import {connect} from "react-redux";

function UserHistory({ history, repeatOrder, getHistory }) {

    useEffect(() => {
        getHistory()
    }, [])

  return (
    <div className={s.user_history}>
      <ul>
        {(history && history.length)
          ? history.map((t, i) => (
            <li key={i}>
              <Transaction transaction={t} repeatOrder={repeatOrder} />
            </li>
          )) : null}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
    // console.log('history: ',state.user.history)
    return {
        history: state.user.history,
    }
}

const mapDispatchToProps = {
    getHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
