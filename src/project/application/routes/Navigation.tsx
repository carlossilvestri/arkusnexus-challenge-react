import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <>
      <div>
        <h1>Navigation Page</h1>

        <ul>
          {routes.map(({ path, to, name }) => (
            <li key={`li-${path}`}>
              <NavLink to={to}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={`route-${path}`} path={path} element={<Component />} />
          ))}
          {/* Default Page */}
          <Route path="*" element={<Navigate replace to="users" />} />
        </Routes>
      </div>
    </>
  );
};

export default Navigation;
