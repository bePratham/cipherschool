import React from "react";
import Navbar from "./Navbar/navbar.jsx"
import Division1 from "./Division1/div1";
import Division2 from "./Division2/div2";
import Division3 from "./Division3/div3";
import "./App.css"; // Import the CSS file containing the styles

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <Division1 />
      <Division2 className="division-wide" />
      <Division3 />
    </div>
    </>
  );
};

export default App;
