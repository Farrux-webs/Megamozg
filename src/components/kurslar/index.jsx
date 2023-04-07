import React, { useEffect } from "react";
import "./style.scss";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import kor from "../../assets/kor.svg";
import content from "../../Localization/content.js"
import AOS from "aos";
import "aos/dist/aos.css";
const index = ({setLang, lang}) => {
  useEffect(() => {
    AOS.init();
  });

  const langs = content[lang] 
  const { Courses } = langs;
  return (
    <div className="kurslar">
      <div className="container">
        <h1 className="sar1">{Courses.Heading}</h1>
        <div className="cardss">
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card1} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="lorems">
                <h3>{Courses.CardHeading}</h3>
                <h4>{Courses.Views}</h4>
              </div>
              <p>{Courses.CardDesc}</p>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card2} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="texts">
                <div className="lorems">
                  <h3>{Courses.CardHeading}</h3>
                  <h4>{Courses.Views}</h4>
                </div>
                <p>{Courses.CardDesc}</p>
                <div className="kor">
                  <img src={kor} alt="" />
                </div>
              </div>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card3} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="lorems">
                <h3>{Courses.CardHeading}</h3>
                <h4>{Courses.Views}</h4>
              </div>
              <p>{Courses.CardDesc}</p>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
