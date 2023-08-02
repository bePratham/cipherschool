import React from 'react'
import userData from '../../assests/data';

import style from './card.module.css';
import {PlusIcon} from '@heroicons/react/24/solid'
import {EllipsisVerticalIcon} from '@heroicons/react/24/solid'
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/solid'
import {HandThumbUpIcon} from '@heroicons/react/24/solid'
import {ShareIcon} from '@heroicons/react/24/solid'

const Post = () => {
  return (
    <>
    <div className={style.card}>
      {userData.users.map((user, index) => (
        <div className={style.completeCard}>
        <div className={style.item} key={index}>
          <div className={style.profilePic}>
            <img
              style={{ borderRadius: '50%', height: '65px', width: '65px' }}
              src={user.image}
              alt={user.username}
              />
          </div>
          <div className={style.userInfo}>
            <p className={style.username}>@{user.username} ' 
            <span className={style.daysAgo}>1 days ago</span>
            {/* <p>5 days ago</p> */}
            </p>
            <p className={style.name}>
              {user.firstName} {user.lastName}
            </p>
          </div>
            <p className={style.follow}>
              <PlusIcon
                style={{
                 
                  height: '15px',
                  width: '15px',
                  color: 'Red',
                }}
                />
              Follow
            </p>
                <EllipsisVerticalIcon style={{
                  marginTop:'13px',
                  height: '20px',
                  width: '25px',
                  fontWeight: 'bold',
                }}/>

        </div>
        <div className={style.parag}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus accusantium ullam quidem minus aliquam, nostrum ipsa, est ut earum, aspernatur possimus expedita repudiandae provident rerum doloremque. Cumque, qui aliquam.
        </div>
        <div className={style.imageContainer}>
            <img src={user.image} alt="" className={style.image} />
          </div>
          <div className={style.downBar}>
            <p class={style.iconContainer}>
              <ChatBubbleBottomCenterIcon style={{
                height:'20px',width:'20px' ,
              }}/>2 
              <HandThumbUpIcon style={{
                height:'20px',width:'20px' ,marginLeft:'18.5px'
              }}/>4 
              <ShareIcon style={{
                height:'20px',width:'20px' ,marginLeft:'18.5px'
              }}/> </p>
            </div>
        </div>
      ))}
    </div>
      </>
  )
}

export default Post