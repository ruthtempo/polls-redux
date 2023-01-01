import { NavLink as RouterLink } from "react-router-dom";

export const NavLink = ({ to, children }) => {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-indigo-600" : ""} px-2 tracking-wide`
      }
    >
      {children}
    </RouterLink>
  );
};
