import { NavLink } from "react-router-dom";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.about}>
      <h2>Привіт!</h2>

      <p>
        Цей проєкт знаходиться в стані розробки. <br />
        <br /> Якщо тобі цікаво прийняти участь як контент-кріейтор, дизайнер
        або ти маєш ідеї з розвитку - пиши в Instagram. <br /> <br />
        <span>
          <a href="https://www.instagram.com/amyamypond" target="_blanc">
            @amyamypond
          </a>
        </span>
      </p>

      <NavLink to="/"> ⬅️ На головну</NavLink>
    </div>
  );
};

export default About;
