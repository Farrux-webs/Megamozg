import React, {useEffect} from 'react'
import Nuc from "../../assets/NUC.png"
import De from "../../assets/DE.png"
import Alina from "../../assets/Alina.png"
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss"
import Content from "../../Localization/content.js"

function Index({ setLang, lang }) {
  useEffect(() => {
    AOS.init();
  });

  const langs = Content[lang];
  const { Certificates } = langs;
  return (
    <section className="Certications">
      <div className="container" data-aos="fade-left" data-aos-duration="3000">
        <h2 className="certificateHeading">{Certificates.Certificate}</h2>
        <ul className="Certications-list">
          <li className="Certication">
            <img src={Nuc} alt="" />
          </li>
          <li className="Certication">
            <img src={De} alt="" />
          </li>
          <li className="Certication">
            <img src={Alina} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Index