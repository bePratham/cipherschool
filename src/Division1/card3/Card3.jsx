import React from 'react';
import userData from '../../assests/data';
import style from './card.module.css';

const Card3 = () => {

  return (
    <div className={style.card}>
      {userData.users.map((user, index) => (
        <div className={style.item} key={index}>
          <div>
            <img style={{borderRadius:'50%',height:'65px',width:'65px'}}
             src={user.image} alt={user.username} />
          </div>
          <p className={style.parag}>{user.email}</p>
          <p className={style.parag}>{user.firstName} {user.lastName}</p>
        </div>
      ))}
    </div>
  )
}

export default Card3;
