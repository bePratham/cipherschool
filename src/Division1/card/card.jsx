import React from 'react'
import style from '../styles.module.css';
import { UserIcon } from '@heroicons/react/24/solid';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Card = () => {
  return (<>
      <div className={style.card}>
        <div className={style.profileContainer}>
         <div style={{width:'80px',height:'80px' ,position:'relative'}}>
          <img src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg" alt="" />
                <UserIcon style={{ width:'65px',height:'65px' , position: 'absolute', top: 10, left: 10 }}/>
             </div>
  </div>
  <div className={style.followers}>
    <p>236</p>
    <p>Followers</p>
  </div>
  <div className={style.follows}>
    <p>103</p>
    <p>Following</p>
  </div>
  <div className={style.info}>
    <p style={{fontWeight: 'bold'}}> UserName ...</p>
    <p>@gmail.com</p>
    <p>Add an awesome bio right now</p>
  </div>
  <div className={style.buttonContainer}>
    <button style={{ height: '38px', borderRadius: '17%'}} className={style.actionButton}>
    <PaperAirplaneIcon style={{width:'30px',height:'32px',transform:'rotate(-45deg)'}}/>Post
    </button>
  </div>
</div>

  </>
  )
}

export default Card;