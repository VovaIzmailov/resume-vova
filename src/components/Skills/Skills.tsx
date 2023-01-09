import Backend from "./Backend/Backend";
import Frontend from "./Frontend/Frontend";
import "./Skills.css";

function Skills(): JSX.Element {
  return (
    <div className="Skills">
      <section className="section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Frontend />
          <Backend />
        </div>
      </section>
    </div>
  );
}

export default Skills;
