import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const DropdownButton = ({ buttonText, username }) => {
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
            <li
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer  hover:bg-sky-50 capitalize"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              {username ? username : "user"}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
