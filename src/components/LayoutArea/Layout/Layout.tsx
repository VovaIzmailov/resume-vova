import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Home from "../../Home/Home";
import ScrollUp from "../../ScrollUp/ScrollUp";
import Skills from "../../Skills/Skills";
import "./Layout.css";

function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <ScrollUp />
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
