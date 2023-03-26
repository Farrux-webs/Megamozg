import React, {useState}  from 'react'
import Header from "./components/header/Index"
import Hero from "./components/hero/index"
import About from "./components/about/index"
import Cards from "./components/cards/index"
import Courses from "./components/kurslar/index"
import Footer from "./components/Footer/Index"
import Order from "./components/Order/Index"
import Mentors from "./components/Mentors/Index"
import News from "./components/News/Index"
import Certifiates from "./components/Certificates/Index"
import content from "./Localization/content.js"

function App() {
  const [language, setlanguage] = useState("ru");
  return (
    <div className="App">
      <Header setLang={setlanguage} lang={language} />
      <Hero setLang={setlanguage} lang={language} />
      <About setLang={setlanguage} lang={language} />
      <Cards setLang={setlanguage} lang={language} />
      <Courses setLang={setlanguage} lang={language} />
      <Mentors setLang={setlanguage} lang={language} />
      <News setLang={setlanguage} lang={language} />
      <Certifiates setLang={setlanguage} lang={language} />
      <Order setLang={setlanguage} lang={language} />
      <Footer setLang={setlanguage} lang={language} />
    </div>
  );
}

export default App
