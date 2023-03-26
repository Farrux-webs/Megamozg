import React from 'react'
import "./style.scss"
import Content from "../../Localization/content.js"

function Index({setLang, lang}) {

  const langs = Content[lang]
  const {Request} = langs
  return (
    <>
      <section className="order">
        <div className="container">
          <h2 className="order-heading">{Request.Heading}</h2>
          <form method="post" className="order-inputs_wrapper">
            <input
              className="order-inputs"
              type="text"
              placeholder={Request.nameInput}
              required
            />
            <input
              className="order-inputs phoneNum"
              type="number"
              placeholder="+998 --- --- -- --"
              required
            />
            <input
              className="order-inputs"
              type="text"
              placeholder="Email: "
              required
            />
            <button className="order-btn" type="Submit">
              {Request.btn}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Index