import React from "react";
import style from '../Division1/card/styles.module.css'
import Card from './card/card.jsx';
import appstyle from '../App.module.css'
import Card2 from "./card2/Card2";
import Card3 from "./card3/Card3";
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
    <div>
      <Card3/>
    </div>
    </div>
    </>
  );
};

export default Division1;
