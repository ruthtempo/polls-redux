import { useState } from "react";

export const DropdownButton = ({
  buttonText,
  children,
  icon,
  iconCollapsed,
  className,
}) => {
  const [show, setShow] = useState(false);
  const Icon = icon;
  const IconCollapsed = iconCollapsed;

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="capitalize bg-indigo-400 hover:bg-indigo-500 py-1 mt-2 text-white rounded-md flex justify-center items-center w-full"
        onClick={() => setShow(!show)}
      >
        {buttonText}
        {show ? (
          <Icon className="h-5 w-6 m-2" />
        ) : (
          <IconCollapsed className="h-5 w-6 m-2" />
        )}
      </button>
      {show && (
        <div
          className="absolute right-0 left-0 bg-white rounded my-1 z-10"
          onClick={() => setShow(false)}
        >
          <ul className="py-1" role="none">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};
