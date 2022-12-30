export const Option = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={` w-full bg-indigo-300 hover:bg-teal-300 disabled:opacity-75 disabled:pointer-events-none text-center max-w-md p-4 text-xl drop-shadow-md cursor-pointer m-2 ${
        className ?? ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
