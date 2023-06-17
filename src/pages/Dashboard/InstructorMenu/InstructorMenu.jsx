import { Fade } from "react-awesome-reveal";
import { FaBook, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="/dashboard/addClass">
          <FaBook />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            Add a Class
          </Fade>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myClasses">
          <FaUsers />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            My Classes
          </Fade>
        </NavLink>
      </li>
    </div>
  );
};

export default InstructorMenu;
