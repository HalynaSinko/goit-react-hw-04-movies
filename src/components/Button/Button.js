import s from "./Button.module.css";

const Button = ({ onClick, nameButton }) => {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      {nameButton}
    </button>
  );
};

export default Button;
