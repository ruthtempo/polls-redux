import { NavLink as RouterLink } from "react-router-dom";

export const NavLink = ({ to, children, onClick }) => {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-indigo-600" : ""} p-2 tracking-wide`
      }
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
};
