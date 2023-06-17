import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useClass from "../../hook/useClass";
import { AuthContext } from "../../providers/AuthProvider";

const ClassCard = ({ classData }) => {
  const { Name, Instructor, Image, Price, Available_seats, _id } = classData;
  const { user } = useContext(AuthContext);
  const [refetch] = useClass();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = (classData) => {
    console.log(classData);
    if (user) {
      const selectedClass = {
        classId: _id,
        Name,
        Image,
        Instructor,
        Price,
        email: user?.email,
      };
      fetch("http://localhost:5000/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl ${
        Available_seats === 0 ? "bg-red-500" : ""
      }`}
    >
      <figure>
        <img src={Image} alt="Language Class" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-2 bg-[#202C45] rounded text-white">
        ${Price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title font-bold">Course Name: {Name}</h2>
        <p className="card-title">Instructor: {Instructor}</p>
        <p className="card-title">Available Seats: {Available_seats}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelectClass(classData)}
            className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
