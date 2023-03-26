import React, {useState} from "react";
import "./style.scss";
import chiziq1 from "../../assets/chiziq1.png";
import chiziq2 from "../../assets/chiziq2.png";
import light from "../../assets/lightning.png"
import content from "../../Localization/content.js"


const index = ({setlang, lang}) => {




  const langs = content[lang]
  const{intro} = langs
  



  return (
    <div className="hero">
      <div className="container">
        <div className="texts">
          <h1>{intro.heading}</h1>
          <h6 class="heroDesc">{intro.description}</h6>
          <div className="btns">
            <button>{intro.buttonFirst}</button>
            <button>{intro.buttonSecond}</button>
          </div>
          <img src={chiziq1} alt="chiziqcha" className="line1" />
          <img src={chiziq2} alt="chiziqcha" className="line2" />
        </div>
      </div>
    </div>
  );
};

export default index;
