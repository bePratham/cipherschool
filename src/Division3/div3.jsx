import React from "react";
import style from '../App.module.css'
import Joined from "./Joined/joined";
import selfcss from './styles.module.css'
const Division3 = () => {
  return (
    <div className={style.division3}>
      <div className={selfcss.division}>
      <h4>Popular community</h4>
      <p>This is the content of Division 3.</p>
      <Joined/>
      </div>
    </div>
  );
};

export default Division3;
