import { Fade } from "react-awesome-reveal";
import { FaBook, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="/dashboard/manageClass">
          <FaBook />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            Manage Classes
          </Fade>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUser">
          <FaUsers />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            Manage Users
          </Fade>
        </NavLink>
      </li>
    </div>
  );
};

export default AdminMenu;
