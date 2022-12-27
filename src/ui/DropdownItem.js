export const DropdownItem = ({ children }) => {
  return (
    <li
      className="text-gray-700 px-4 py-2 text-sm cursor-pointer hover:bg-sky-50 capitalize border-dotted"
      role="menuitem"
      tabindex="-1"
      id="menu-item-0"
    >
      {children}
    </li>
  );
};
