import React, {useEffect} from "react";
import "./style.scss";
import light from "../../assets/lighting.svg";
import about from "../../assets/txt.png";
import man from "../../assets/Design.png";
import AOS from "aos";
import "aos/dist/aos.css";
import content from "../../Localization/content.js";


const index = ({setLang, lang}) => {

  useEffect(()=>{
    AOS.init()
  })


  const langs = content[lang]

  const {AboutUS} = langs

  return (
    <div className="about">
      <img src={light} alt="" className="light" />
      <div
        className="container about_inline"
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        <div className="text">
          <h1 className="aboutUs__heading">{AboutUS.heading}</h1>
          <h5>{AboutUS.description}</h5>
        </div>
        <div className="imgs">
          <img
            src={man}
            width="620"
            height="400"
            alt="manphoto"
            className="man"
          />
          <img src={about} alt="txt" className="txt" />
        </div>
      </div>
    </div>
  );
};

export default index;
