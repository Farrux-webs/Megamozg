import React, { useEffect } from "react";
import "./style.scss";
import mikro from "../../assets/microscope.svg";
import wallet from "../../assets/wallet.svg";
import user from "../../assets/users.svg";
import student from "../../assets/graduation-cap.svg";
import ellipse from "../../assets/Ellipse.svg";
import png from "../../assets//pngwing2.svg";
import content from "../../Localization/content.js"

import AOS from "aos";
import "aos/dist/aos.css";
const index = ({setLang, lang}) => {

    useEffect(()=>{
        AOS.init()
    })

    const langs = content[lang]
    const {Cards} = langs
  return (
    <>
      <section className="CardsSection">
        <div className="container">
          <img src={ellipse} alt="" className="ellipse" />
          <img src={png} alt="" className="png" />
          <div className="cards" data-aos="fade-left" data-aos-duration="1800">
            <div className="card">
              <div className="img">
                <img src={mikro} alt="mikropng" />
              </div>
              <h5>{Cards.fCard}</h5>
            </div>
            <div className="card">
              <div className="img">
                <img src={user} alt="mikropng" />
              </div>
              <h5>{Cards.sCard}</h5>
            </div>
            <div className="card">
              <div className="img">
                <img src={wallet} alt="mikropng" />
              </div>
              <h5>{Cards.tCard}</h5>
            </div>
            <div className="card">
              <div className="img">
                <img src={student} alt="mikropng" />
              </div>
              <h5>{Cards.foCard}</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
