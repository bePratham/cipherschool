import React from "react";
import appstyle from '../App.module.css'
import Navbar from "./Navbar/Navbar";
const Division2 = () => {
  const [activeTab, setActiveTab] = React.useState('section1');
  return (
    <div className={appstyle.divisionWide}>
      <div>
      <Navbar setActiveTab={setActiveTab} />
      {activeTab === 'section1' ? '<Section1 />' : '<Section2 />'}
      </div>
     
      </div>    
  );
};

export default Division2;
