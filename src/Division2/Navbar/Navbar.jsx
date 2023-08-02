import React from 'react'
import { useState } from 'react';
import style from './style.module.css'
const Navbar = ({setActiveTab}) => {
  const [tabName, setTabName] = useState('section1');
  const handleTabClick = (tabName) => {
    setTabName(tabName);
    setActiveTab(tabName.toLowerCase());
  };

  return (
    <div className={style.navbar}>
      <div className={style.section}>
      <div className={`${style.tab} ${tabName === 'section1' ?style.activeTab:'' }`}
       onClick={() => handleTabClick('section1')}>
       Posts
      </div>
      </div>
      <div className={style.section}>
      <div className={`${style.tab} ${tabName === 'section2' ? style.activeTab : ''}`}
       onClick={() => handleTabClick('section2')}>
        Opportunities
      </div>
      </div>
    </div>
  );
};
export default Navbar;