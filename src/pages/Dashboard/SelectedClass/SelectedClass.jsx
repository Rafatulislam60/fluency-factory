import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedClass from "../../../hook/useSelectedClass";

const SelectedClass = () => {
  const [selectClass, refetch] = useSelectedClass();
  console.log(selectClass);

  const handleDelete = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClass/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your food item has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Fluency Factory | Selected Class</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th className="bg-[#202C45]">#</th>
              <th className="bg-[#202C45]">Photo</th>
              <th className="bg-[#202C45]">Class Name</th>
              <th className="bg-[#202C45]">Price</th>
              <th className="bg-[#202C45]">Payment</th>
              <th className="bg-[#202C45]">Action</th>
            </tr>
          </thead>
          <tbody>
            {selectClass.map((course, index) => (
              <tr className="bg-warning text-white" key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={course.Image} />
                    </div>
                  </div>
                </td>
                <td>{course.Name}</td>
                <td>${course.Price}</td>
                <td>
                  <Link>
                    <FaWallet className="text-primary"></FaWallet>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(course)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
