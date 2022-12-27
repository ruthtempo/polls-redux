export const DropdownItem = ({ children, onClick }) => {
  return (
    <li
      className="text-gray-700 px-4 py-2 text-sm cursor-pointer hover:bg-indigo-50 capitalize border-dotted"
      onClick={onClick}
    >
      {children}
    </li>
  );
};
