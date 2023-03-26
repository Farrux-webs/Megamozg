import React from 'react'
import Logo from "../../assets/logo.svg"
import Vector from "../../assets/Vector.svg"
import {NavLink} from "react-router-dom"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import Content from "../../Localization/content.js"
import "./style.scss"

function Index({setLang, lang}) {
  const langs = Content[lang]
  const {Footer} = langs
  return (
    <>
      <footer className="footer">
        <div className="container footer-contents">
          <div className="footer-left">
            <NavLink className="footer__logo">
              <img src={Logo} width="390" height="95" alt="" />
            </NavLink>
            <h2 className="Education">{Footer.Education}</h2>
            <p className="edu__desc">{Footer.FooterDesc}</p>
          </div>
          <ul className="footer__list">
            <li className="footer__list__item">
              <ul className="footer-list-inline">
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.AboutUsLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.GraduationLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.ScolarshipLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.AdmissionsLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.InternationalLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.EventsLink}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="footer__list__item">
              <ul className="footer-list-inline">
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.LanguageLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.WordpressLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.PrivacyLink}
                  </NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">{Footer.FAQsLink}</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">
                    {Footer.SupportLink}
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="footer-right">
            <p className="footer-left-title">{Footer.PhNumber}</p>
            <strong className="phone__number">+998 (99) 99-99-99</strong>
            <button className="footer__btn">{Footer.CallLink}</button>
            <ul className="footer__social__media">
              <li className="footer__social_media_item">
                <img src={facebook} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={instagram} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={linkedin} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={twitter} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index