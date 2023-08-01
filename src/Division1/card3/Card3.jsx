import React from 'react';
import userData from '../../assests/data';
import style from './card.module.css';
import {PlusIcon} from '@heroicons/react/24/solid'
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
          <p style={{marginLeft:'auto',marginRight:'6px',fontSize:'13px',fontWeight:'bold'}}>
            <PlusIcon style={{height:'15px',width:'15px', color:'Red'
            }}/>Follow</p>
          <p className={style.name}>{user.firstName} {user.lastName}</p>
        </div>
      ))}
    </div>
  )
}

export default Card3;
