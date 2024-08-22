import css from ".//MainPage.module.css";
import plumbob from "../img/plumbobMov.gif";
import self from "../img/self.png";

const MainPage = () => {
  return (
    <div className={css.hero}>
      <div className={css.logoContainer}>
        <img className={css.plumbobLogo} src={plumbob} alt="moving plumbob" />
        <h3>The Sims UA Community</h3>
      </div>
      <h1>
        Українська спільнота гравців <span>The Sims</span>
      </h1>
      <div className={css.selfContainer}>
        <img className={css.plumbob} src={plumbob} alt="moving plumbob" />
        <img className={css.selfPic} src={self} alt="_personal_photo" />
      </div>
    </div>
  );
};

export default MainPage;
