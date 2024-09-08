import css from "./MainPage.module.css";
import SimsLogo from "../../img/SimsLogo.svg";
import NavigationLink from "../../Components/NavigationLink/NavigationLink";

const MainPage = () => {
  return (
    <div className={css.main}>
      <h1 className={css.header}>
        Українська спільнота гравців{" "}
        <span>
          <img src={SimsLogo} style={{ height: 40, width: 100 }} />
        </span>
      </h1>
      <div className={css.navigation}>
        <NavigationLink target="/the-sims-2">
          Коди для The Sims 2
        </NavigationLink>
        <NavigationLink target="/the-sims-3">
          Коди для The Sims 3
        </NavigationLink>
        <NavigationLink target="/the-sims-4">
          Коди для The Sims 4
        </NavigationLink>
        <NavigationLink target="/about">Про проєкт</NavigationLink>
      </div>
    </div>
  );
};

export default MainPage;
