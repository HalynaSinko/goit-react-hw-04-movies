const Button = ({ onClick, nameButton }) => {
  return (
    <button type="button" onClick={onClick}>
      {nameButton}
    </button>
  );
};

export default Button;
