import { NavLink } from "react-router-dom";
import css from "./NavigationLink.module.css";

type Props = {
  target: string;
  children: string;
  //! to check how children should be typed
};

const NavigationLink = ({ target, children }: Props) => {
  return (
    <NavLink className={css.link} to={target}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
