import "./App.css";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import Blocks from "./components/Blocks";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="portfolio" />
      </Helmet>
      <Header />

      <About />

      <h1>FAVORITES</h1>
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
