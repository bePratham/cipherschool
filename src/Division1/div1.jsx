import React from "react";
import style from './styles.module.css'
import Card from './card/card.jsx';
import appstyle from '../App.module.css'
import Card2 from "./card2/Card2";
const Division1 = () => {
  return (
    <>
    <div className={appstyle.division}>
    <div className={style.wholeCard}>
      <Card />
    </div>
    <div>
    <Card2/>
    </div>
    </div>
    </>
  );
};

export default Division1;
