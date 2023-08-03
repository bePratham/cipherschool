import React from 'react'
import style from './style.module.css'
import userData from '../../assests/tweets.ts'
const Joined = () => {
  return (
    <>
   <div className={style.card}>
  {userData.users.map((user, id) => (
    <div className={style.completeCard} key={id}>
      <div className={style.channels}>
        {user.impressions && (
          <div className={style.userDetails}>
            <div  className={style.profilePics}>
            <img             
              style={{  borderRadius:'50%',
              width: '40px',
              height: '40px'}}
              src={user.user.image}
              alt=""
              />
            <div className={style.userInfo}>
              <span>{user.user.username}</span>
              <span>{user.impressions}</span>
            </div>
              </div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>


    </>
  )
}

export default Joined;