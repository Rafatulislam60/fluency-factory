import { Helmet } from "react-helmet-async";

import useClass from "../../hook/useClass";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes] = useClass()

  

  return (
    <div className="w-full  py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Classes</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-auto">
        {classes?.map((classData) => <ClassCard key={classData._id} classData={classData}></ClassCard>)}
      </div>
    </div>
  );
};

export default Classes;
