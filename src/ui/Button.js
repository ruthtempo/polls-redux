export const Button = ({ buttonText }) => {
  return (
    <button
      className="border-solid bg-indigo-500 hover:bg-indigo-700 py-2 my-2 rounded-full text-white capitalize"
      type="button"
    >
      {buttonText}
    </button>
  );
};
