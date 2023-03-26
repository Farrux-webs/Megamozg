import React from 'react'
import newsf from "../../assets/newsF.png"
import newsS from "../../assets/newsS.png"
import Content from "../../Localization/content.js"
import "./style.scss"

function Index({setLang, lang}) {
  const langs = Content[lang];
  const {News} = langs
  return (
    <>
      <section className="news">
        <div className="container">
          <h2 className="news-heading">{News.news}</h2>
          <div className="newsWrapper">
            <div className="images">
              <img
                src={newsf}
                width="450"
                height="290"
                className="newsf"
                alt="yangilik rasmi"
              />
              <img
                src={newsS}
                width="450"
                height="290"
                className="newsS"
                alt="yangilik rasmi"
              />
            </div>
            <p className="news-desc">{News.newsDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index