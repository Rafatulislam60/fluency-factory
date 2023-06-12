import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold font-serif text-center">
        Our <span className="text-[#F21855]">Popular</span> Instructors
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-auto">
        {popularInstructors.map((popularInstructor) => (
          <div
            key={popularInstructor.index}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={popularInstructor.Image} alt="Language Class" />
            </figure>
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title font-bold">
                Name: {popularInstructor.Name}
              </h2>
              <p className="card-title">Email: {popularInstructor.Email}</p>
              <p className="card-title">
                Enrolled Students: {popularInstructor.Enrolled}
              </p>
              <div className="card-actions justify-end">
                <button
                  //   onClick={() => handleAddToCart(item)}
                  className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4"
                >
                  See Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
