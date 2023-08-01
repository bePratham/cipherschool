import React from 'react';
import style from './card.module.css'; // Import the CSS file for styling (create card.css)
// import card from '../styles.module.css'
const Card2 = () => {
  return (
    // <div className={card.wholeCard}>
    <div className={style.card}>
      <h2 className={style.h2}>Card Title</h2>
      <p className={style.parag}>This is a sample card with four different links:</p>
      <div className={style.links}>
        <a  className={style.a}href="#link1">Link 1</a> 
        <a className={style.a} href="#link2">Link 2</a>
        <a className={style.a} href="#link3">Link 3</a>
        <a  className={style.a}href="#link4">Link 4</a>
      </div>
    </div>
    // </div>
  );
};

export default Card2;
