import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const DropdownButton = ({ buttonText, children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        type="button"
        className="capitalize bg-sky-500 hover:bg-sky-700 py-1 mt-2 text-white rounded flex justify-center items-center"
        onClick={() => setShow(!show)}
      >
        {buttonText}
        <ChevronDownIcon className="h-5 w-6 m-2" />
      </button>
      {show && (
        <div
          className="absolut right-0 bg-white rounded my-1"
          role="menu"
          tabindex="-1"
        >
          <ul class="py-1" role="none">
            {children}
          </ul>
        </div>
      )}
    </>
  );
};
