import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });

  return (
    <div className="w-full  py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Home</title>
      </Helmet>
      <div className="mt-8 overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((classData) => (
              <tr key={classData._id}>
                <td>
                  <img className="w-10 h-10" src={classData.Image} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
