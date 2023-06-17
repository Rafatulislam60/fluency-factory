import { Fade } from "react-awesome-reveal";
import { FaBookOpen, FaBookmark, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="/dashboard/selectedClass">
          <FaBookmark />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            My Selected Class
          </Fade>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/enrolledClass">
          <FaBookOpen />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            My Enrolled Class
          </Fade>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/history">
          <FaWallet />{" "}
          <Fade delay={1e3} cascade damping={1e-1}>
            Payment History
          </Fade>
        </NavLink>
      </li>
    </div>
  );
};

export default StudentMenu;
