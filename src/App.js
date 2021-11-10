import React from "react"; 
import Price from "./Price.js";
import './App.css';

function App() {
  
  return (
    <div className="textarea">
        <p> 
          <img src="./assets/stickerBW.png" className="banner" alt="logo"/>
        </p>
        <div className="box">
          <div className="box-header">
            <Price />
          </div>

          <div className="box-body">
            <p> Under construction </p>
          </div>

        </div>
    </div>);
}

export default App;
