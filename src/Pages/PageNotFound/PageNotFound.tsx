import { NavLink } from "react-router-dom";
import css from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={css.notFound}>
      <NavLink to="/">
        <p className={css.error}>
          E <span>r</span>ror
        </p>
        <p className={css.code}>
          4<span>0</span>
          <span>4</span>
        </p>
      </NavLink>
    </div>
  );
};

export default PageNotFound;
