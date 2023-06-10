import { useEffect, useState } from "react";

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("classData.json")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold font-serif text-center">
        Our <span className="text-[#F21855]">Popular</span> Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-auto">
        {popularClasses.map((popularClass) => (
          <div
            key={popularClass.index}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={popularClass.Image} alt="Language Class" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-2 bg-[#202C45] rounded text-white">
              ${popularClass.Price}
            </p>
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title font-bold">Course Name: {popularClass.Name}</h2>
              <p className="card-title">Instructor: {popularClass.Instructor}</p>
              <p className="card-title">Available Seats: {popularClass.Available_seats}</p>
              <div className="card-actions justify-end">
                <button
                //   onClick={() => handleAddToCart(item)}
                  className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
