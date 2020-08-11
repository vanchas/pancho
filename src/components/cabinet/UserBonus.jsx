import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import s from './cabinet.module.scss'
import BonusFrame from '../../assets/images/bonus_frame.png'
import BonusBox from '../../assets/images/box.png'
import Question from '../../assets/images/signs/question.png'

export default function UserBonus({ bonuses }) {
  const [bonusSum, setBonusSum] = useState(0);

  useEffect(() => {
    if (bonuses.length) {
      let sum = 0;
      bonuses.forEach((a) => {
        return sum += +a.amount;
      }, bonuses);
      setBonusSum(sum);
    }
  }, []);

  return (
    <div className={s.user_bonus}>
      <h5 className="text-center py-2">НА ВАШЕМ БОНУСНОМ СЧЕТУ</h5>
      <div className={s.amount_block}>
        {/*<img src={BonusFrame} alt="" className="w-100" />*/}
        <img src={BonusBox} alt="" className={s.box} />
        <span className={s.sum_number}>{bonusSum}</span>
        <small className="h6 pt-1">Бонусами вы можете расчитываться <br /> за продукцию пиццерии до 100%</small>
        <Link href="/bonus"><a className="btn">
          <img src={Question} alt="" className="pr-2" />
          <u>Подробнее о бонусной программе</u>
        </a></Link>
      </div>
      <div className={s.bonus_history}>
        <table>
          <thead>
            <tr className="pb-2">
              <th className="pr-2">Дата засчисления</th>
              <th className="pl-2">Начисленные бонусы</th>
            </tr>
          </thead>
          <tbody>
            {bonuses.map((b, i) => (
              <tr key={i}>
                <td>{b.date}</td>
                <td className="text-right">+ {b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={s.read_more}>
        <button className="btn">ПОСМОТРЕТЬ ЕЩЕ</button>
      </div>
    </div>
  )
}
