import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import AdminMenu from "../../pages/Dashboard/AdminMenu/AdminMenu";
import StudentMenu from "../../pages/Dashboard/StudentMenu/StudentMenu";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // const [isInstructor] = useInstructors();
  // const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-warning drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#202C45] text-base-content">
          {isAdmin ? <AdminMenu></AdminMenu> : <StudentMenu></StudentMenu>}

          {/* <>
            {isAdmin && <AdminMenu></AdminMenu>}
            {isInstructor && <InstructorMenu></InstructorMenu>}
            {!isAdmin && <StudentMenu></StudentMenu>}
          </> */}

          <div className="divider text-white"></div>

          <li className="text-white">
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>

          <li className="text-white">
            <NavLink to="/class"> Classes</NavLink>
          </li>

          <li className="text-white">
            <NavLink to="/instructor"> Instructor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
