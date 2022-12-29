export const Option = ({ children, className, onClick }) => {
  return (
    <div
      className={` text-center max-w-md bg-indigo-300 hover:bg-teal-300 p-4 text-xl drop-shadow-md cursor-pointer m-2 ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
