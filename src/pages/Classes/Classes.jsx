import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://fluency-factory-server-rafatulislam60.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });

  return (
    <div className="w-full  py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Classes</title>
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
                  <img className="w-20 h-20" src={classData.Image} />
                </td>
                <td>{classData.Name}</td>
                <td>{classData.Instructor}</td>
                <td>{classData.Available_seats}</td>
                <td>{classData.Price}</td>
                <td>
                  <button
                    //   onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4"
                  >
                    Select
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

export default Classes;
