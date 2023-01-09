import Data from "./Data/Data";
import "./Home.css";
import ScrollDown from "./ScrollDown/ScrollDown";
import Social from "./Social/Social";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <section className="section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <Social />

            <div className="home__img"></div>

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>
    </div>
  );
}

export default Home;
