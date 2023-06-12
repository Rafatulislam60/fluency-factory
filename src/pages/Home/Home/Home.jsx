import { Helmet } from "react-helmet-async";
import Planning from "../Planning/Planning";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Planning></Planning>
    </div>
  );
};

export default Home;
