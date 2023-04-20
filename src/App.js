import "./App.css";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import Blocks from "./components/Blocks";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LanguageSelector from "./components/Language/LanguageSelector";
import { useTranslation } from "react-i18next";
import About from "./components/About";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="portfolio" />
      </Helmet>
      <Header />
      <LanguageSelector />
      <About />

      <h1>{t("FAVORITES")}</h1>
      <Routes>
        <Route path="/" element={<Blocks />}>
          <Route index element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
