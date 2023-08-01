import React from 'react'
import style from './styles.module.css';
import { UserIcon } from '@heroicons/react/24/solid';
const Card = () => {
  return (<>
      <div className={style.card}>
            <div className='center'>
        <div className={style.profile}>
          <UserIcon/>
        </div>
  <div className={style.info}>
    <p>Followers: 1000</p>
    <p>Following: 500</p>
    <p>Some text goes here...</p>
  </div>
  <div className={style.button_container}>
  </div>
    </div>
    <button className={style.action_button}>Follow</button>
    </div>
  </>
  )
}

export default Card;