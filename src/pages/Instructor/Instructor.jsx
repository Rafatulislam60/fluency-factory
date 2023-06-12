import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  });

  return (
    <div className="w-full  py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Instructors</title>
      </Helmet>
      <div className="mt-8 overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors?.map((instructorData, index) => (
              <tr key={instructorData._id}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-20 h-20 rounded" src={instructorData.Image} />
                </td>
                <td>{instructorData.Name}</td>
                <td>{instructorData.Email}</td>

                <td>
                  <button
                    //   onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4"
                  >
                    See Classes
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

export default Instructor;
