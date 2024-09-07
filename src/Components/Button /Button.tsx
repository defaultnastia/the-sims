import css from "./Button.module.css";

type Button = "normal" | "red";

type Props = {
  customType: Button;
  onClick: () => void;
  children: React.ReactElement;
};

const Button = ({ customType, onClick, children }: Props) => {
  const applyStyle = (type: Button) => {
    switch (type) {
      case "normal":
        return css.normal;
      case "red":
        return css.red;
      default:
        return css.normal;
    }
  };

  return (
    <button className={applyStyle(customType)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
