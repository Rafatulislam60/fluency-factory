import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://fluency-factory-server.vercel.app/users");
    return await res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://fluency-factory-server.vercel.app/users/${user._id}?role=admin`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://fluency-factory-server.vercel.app/users/${user._id}?role=instructor`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Fluency Factory | Manage Users</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th className="bg-[#202C45]">#</th>
              <th className="bg-[#202C45]">Name</th>
              <th className="bg-[#202C45]">Email</th>
              <th className="bg-[#202C45]">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="bg-warning text-white" key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className={`flex gap-2 items-center rounded-md text-sm font-medium bg-orange-500 p-2 ${
                        user?.role === "instructor"
                          ? " btn-disabled opacity-70"
                          : ""
                      }`}
                      title="Make Instructor"
                    >
                      Instructor
                    </button>
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className={`flex  gap-2 items-center rounded-md text-sm font-medium bg-success p-2 ${
                        user?.role === "admin" ? " btn-disabled opacity-70" : ""
                      }`}
                      title="Make Admin"
                    >
                      Admin
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
