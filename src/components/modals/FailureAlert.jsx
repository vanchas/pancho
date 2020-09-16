import React from "react";
import { useSelector } from "react-redux";
import s from './alert.module.scss'

function FailureAlert() {
  const text = useSelector(state => state.user.showFailure)

  return (
    <div className={`${s.root} shadow`}>
      {text}
      <i className={`${s.failure} fas fa-exclamation-circle`} />
    </div>
  );
}

export default FailureAlert;
