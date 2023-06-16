import useClass from "../../../hook/useClass";
import ClassCard from "../../Classes/ClassCard";

const PopularClass = () => {
  const [popularClassesData] = useClass();
  const classes = popularClassesData.slice(0, 6);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold font-serif text-center">
        Our <span className="text-[#F21855]">Popular</span> Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-auto">
        {classes?.map((classData) => (
          <ClassCard key={classData._id} classData={classData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
