import React from "react";
import appstyle from '../App.module.css'
import Navbar from "./Navbar/Navbar";
import Post from './Posts/posts.jsx'
import Opportunity from "./Opportunities/Opportunity";

const Division2 = () => {
  const [activeTab, setActiveTab] = React.useState('section1');
  return (
    <>
      <Navbar setActiveTab={setActiveTab} />
    <div className={`${appstyle.divisionWide} ${appstyle.scrollableContent}`}>
      <div>
      {activeTab === 'section1' ? <Post/> : <Opportunity/>}
      </div>   
      </div>    
    </>
  );
};

export default Division2;
