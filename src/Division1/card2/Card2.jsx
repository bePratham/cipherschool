import React from 'react';
import style from './card.module.css';
import { HomeIcon } from '@heroicons/react/24/solid'; 
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'; 
import { UserGroupIcon } from '@heroicons/react/24/solid'; 
import { QueueListIcon } from '@heroicons/react/24/solid'; 


const Card2 = () => {
  return (
    <div className={style.card}>     
    <div className={style.items}>
        <a  className={style.a}href="#link1"><HomeIcon style={{height:'30px'}}/> Home</a> 
        <a className={style.a} href="#link2"><UserGroupIcon style={{height:'30px'}}/>Community</a>
        <a className={style.a} href="#link3"><MagnifyingGlassIcon style={{height:'30px'}}/>Search</a>
        <a  className={style.a}href="#link4"><QueueListIcon style={{height:'30px'}}/>Courses</a>
    </div>
   </div>
  );
};

export default Card2;
