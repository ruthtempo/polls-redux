export const Option = ({
  className,
  onClick,
  disabled,
  votesLength,
  percentage,
  isSelected,
  text,
}) => {
  return (
    <div className="p-2">
      <button
        className={`
          w-full
          bg-indigo-300
          hover:bg-teal-300
          disabled:opacity-75
          disabled:pointer-events-none
          text-center
          p-4
          text-xl
          drop-shadow-md
          cursor-pointer
          my-3
          ${className ?? ""}
          ${isSelected ? "bg-teal-300" : ""}
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
      {disabled && (
        <p className="text-center text-gray-600">
          {votesLength} votes ({percentage} %)
        </p>
      )}
    </div>
  );
};
