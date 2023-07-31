import React from "react";
import Navbar from "./Navbar/navbar.jsx"
import Division1 from "./Division1/div1";
import Division2 from "./Division2/div2";
import Division3 from "./Division3/div3";
import style from "./App.module.css"; // Import the CSS file containing the styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Navbar />
    <div className={style.container}>
      <Division1 />
      <Division2 className={style.divisionWide}/>
      <Division3 />
    </div>
    </>
  );
};

export default App;
