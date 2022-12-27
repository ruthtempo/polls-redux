export const Button = ({ buttonText, disabled }) => {
  return (
    <button
      className="drop-shadow-md border-solid bg-indigo-500 hover:bg-indigo-700 py-2 my-2 rounded-full text-white capitalize disabled:bg-slate-50 disabled:text-slate-500  disabled:border-slate-200 disabled:shadow-none"
      type="button"
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};
