import css from "./MainPage.module.css";
import SimsLogo from "../img/SimsLogo.svg";

const MainPage = () => {
  return (
    <div className={css.main}>
      <h1 className={css.header}>
        Українська спільнота гравців{" "}
        <span>
          <img src={SimsLogo} style={{ height: 40, width: 100 }} />
        </span>
      </h1>
    </div>
  );
};

export default MainPage;
