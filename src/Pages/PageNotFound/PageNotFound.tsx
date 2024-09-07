import css from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={css.notFound}>
      <p className={css.error}>
        E <span>r</span>ror
      </p>
      <p className={css.code}>
        4<span>0</span>
        <span>4</span>
      </p>
    </div>
  );
};

export default PageNotFound;
