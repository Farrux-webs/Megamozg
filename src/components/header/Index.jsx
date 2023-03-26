import React, {useState, useRef} from 'react'
import {NavLink} from "react-router-dom"
import Logo from "../../assets/logo.svg"
import topBG from  "../../assets/topBG.jpg"
import Palts from "../../assets/heropalts.svg"
import RU from "../../assets/ru.png"
import UZ from "../../assets/uz.png"
import useLang from "../../Hooks/useLang";
import content from "../../Localization/content";
import Hamburger from "hamburger-react";
import "./style.scss"

function Index({setLang, lang}) {


    const [isOpen, setOpen] = useState(false);

const langs = content[lang]
const {navbar} = langs

  return (
    <header className="header">
      <div className="container headContents">
        <img
          src={topBG}
          width="1000"
          height="700"
          className="topBG"
          alt="background photo"
        />
        <nav className="navbar">
          <NavLink>
            <img src={Logo} alt="Logotip" />
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link">{navbar.AboutUS}</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">{navbar.Courses}</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">{navbar.news}</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">{navbar.mentors}</NavLink>
            </li>
          </ul>

          <div className="LangHeader">
            <img src={lang === 'ru' ? RU : UZ} width="18" height="18" alt="" />
            <select
              name="lang"
              id="lang"
              className="setLang"
              onChange={(e) => {
                setLang(e.target.value);
              }}
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
          </div>

          <button className="buttoncha">{navbar.contacts}</button>

          <div className="header__hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={27}
              rounded
              hideOutline={false}
              onToggle={() => {
                elNavbar.current.classList.toggle("header__hamburger--active");
              }}
            />
          </div>
        </nav>
        <img
          src={Palts}
          width="550"
          height="450"
          className="finger"
          alt="barmoq izi"
        />
      </div>
    </header>
  );
}

export default Index