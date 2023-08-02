import React from 'react';
import style from './style.module.css';
import { useState } from 'react';
import userData from '../../assests/tweets.ts';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/solid'
import {HandThumbUpIcon} from '@heroicons/react/24/solid'
const Opportunity = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate;
  };
  const [showFullContent, setShowFullContent] = useState(false);
  const handleReadMoreClick = () => {
    setShowFullContent(true);
  };
  const getDaysDifference = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const currentDate = getCurrentDate();
    const differenceInMilliseconds = currentDate - createdAtDate;
    const daysDifference = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.floor(daysDifference);
  };
  return (
    <>
     <div className={style.card}>
      {userData.users.map((user, id) => (
        <div className={style.completeCard} key={id}>
          <div className={style.firstLine}>
            <span>Cipher Schools</span>
            <span><img 
            style={{width:'30px',height:'30px'}}
            src="https://d3gmywgj71m21w.cloudfront.net/afbe5cca6cc698f5e677a961ce7ae47f" alt="" /></span>
          </div>
            <p className={style.days}>{getDaysDifference(user.createdAt)-96} days ago</p>
          <p className={style.loremText}>
          </p>
          <div className={style.content}>
            {showFullContent ? (
              <p>{user.content}</p>
            ) : (
              <>
                <p>
                  {user.content.split(' ').slice(0, 20).join(' ')}
                  {user.content.split(' ').length > 20 && '...'}
                </p>
                {user.content.split(' ').length > 20 && (
                  <button className={style.readMoreButton} onClick={handleReadMoreClick}>
                    Read More
                  </button>
                )}
              </>
            )}
            </div>

          {/* Third Line */}
          <div className={style.imageContainer}>
            <img
              style={{ height: 'auto', width: 'auto', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }}
              src={user.image}
              alt={user.username}
            />
          </div>

          {/* Fourth Line (Icons) */}
          <div className={style.iconsContainer}>
          <div className={style.downBar}>
            <p class={style.iconContainer}>
              <ChatBubbleBottomCenterIcon style={{
                height:'20px',width:'20px' ,
              }}/>{user.numberOfComments}
              <HandThumbUpIcon style={{
                height:'20px',width:'20px' ,marginLeft:'18.5px'
              }}/>{user.numberOfLikes} 
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Opportunity