import plumbob from "../../img/plumbobMov.gif";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <img className={css.plumbobLogo} src={plumbob} alt="moving plumbob" />
      <h3>The Sims UA Community</h3>
    </div>
  );
};

export default Logo;
