import css from "./Button.module.css";

type Props = {
  type: string;
  children: React.ReactElement;
};

const Button = ({ type, children }: Props) => {
  switch (type) {
    case value:
      break;

    default:
      break;
  }

  return <button className={css.type}>{children}</button>;
};

export default Button;
