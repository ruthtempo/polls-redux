export const Button = ({
  buttonText,
  disabled,
  onClick,
  className,
  dataTestid,
}) => {
  return (
    <button
      className={`drop-shadow-md border-solid bg-indigo-500 hover:bg-indigo-700 py-2 px-3 my-2 rounded-full text-white text-center capitalize disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
        className ?? ""
      }`}
      type="button"
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestid}
    >
      {buttonText}
    </button>
  );
};
