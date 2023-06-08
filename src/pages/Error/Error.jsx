import { Link } from "react-router-dom";
import errorImg from "../../assets/404.gif";

const Error = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={errorImg} alt="" />
          <Link to="/" className="btn bg-[#202C45] text-white mt-10">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
