import { FaBookOpen, FaBookmark, FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // const [isAdmin] = useAdmin();

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
          <li>
            <NavLink to="/dashboard/selectedClass">
              <FaBookmark /> My Selected Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/enrolledClass">
              <FaBookOpen /> My Enrolled Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <div className="divider text-white"></div>
          <li className="text-white">
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/class"> Instructor</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/instructor"> Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
